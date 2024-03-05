from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ResponseDataModel , EstimateCleaningPrice
from .serializers import InputQuerySerializer , ResponseDataSerializer, EstimateCleaningPriceSerializer
from .data_extract import google_shop
from .initial import initial
from .filters import query_filter_client
from .ai_image_similarity import ai_similarity
from .utils import json_to_image
from .speech_to_text import speech_to_text
from rest_framework import status 
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .cleaning_price_calculator import  categorize_base_on_json
from .ML_cleaning_price import cleaning_price_calculator
from .categorize import categorize
from .user_feedback import user_price_feedback
from home.calculate_confidence import calculate_closeness

class HomeView(APIView):
    # swagger manual schemas
    @swagger_auto_schema(
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=["image_url",],  # Add other required fields if any
        properties={
            'image_url': openapi.Schema(
                type=openapi.TYPE_STRING,
                description='The URL of the image',
            ),
            'user_voice': openapi.Schema(
                type=openapi.TYPE_FILE,
                description='The user voice file',
            ),
            'search_query': openapi.Schema(
                type=openapi.TYPE_STRING,
                description='The search query',
            ),
            'product_qty': openapi.Schema(
                type=openapi.TYPE_INTEGER,
                description='The product quantity',
            ),
        },
    ),
            manual_parameters=[
            openapi.Parameter(
                name="price_max",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_INTEGER,
                description="The maximum price for filtering products",
            ),
            openapi.Parameter(
                name="price_min",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_INTEGER,
                description="The minimum price for filtering products",
            ),            openapi.Parameter(
                name="brand",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_STRING,
                description="The brand for filtering products",
            ),            openapi.Parameter(
                name="source",
                in_=openapi.IN_QUERY,
                type=openapi.TYPE_STRING,
                description="The source of products for filtering products",
            ),
        ],
    responses={
        status.HTTP_201_CREATED: ResponseDataSerializer(many=True),
        status.HTTP_400_BAD_REQUEST: "Bad Request",
    },
    operation_summary="Summary of your API",
    operation_description="Description of your API",
    )
    def post(self , request):
        query_params = request.query_params
        srz_data = InputQuerySerializer(data=request.data)
        if srz_data.is_valid():
            input_query_model = srz_data.save()
            initial(input_query_model)
            if not input_query_model.search_query:
                exc =speech_to_text(input_query_model)
                if exc is not None:
                    return Response({'message':exc} , status.HTTP_400_BAD_REQUEST )
            products_list=google_shop(input_query_model)
            print()
            if not isinstance(products_list , list):
                return Response ({"message":products_list} , status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            products_list = query_filter_client(products_list , query_params)
            if not isinstance(products_list , list):
                return Response ({"message":products_list} , status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            for i , data in enumerate(products_list):
                json_to_image(raw_data = data.get('image_bytes') , file_name=f'{i}'.zfill(2) , directory='img')
            try:
                ai_similarity(products_list , input_query_model)
            except Exception as e:
                return Response ({'message' : str(e)} , status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            response = ResponseDataModel.objects.filter(input_query_model = input_query_model)
            srz_data = ResponseDataSerializer(response , many= True, context={'request': request}).data
            categorize_base_on_json(input_query_model)
            return Response(srz_data)
        print(srz_data)
        return Response(srz_data.error_messages)
            

class CleaningPriceView(APIView):
    def post(self , request):
        # try:
            data = request.data
            response_model = ResponseDataModel.objects.get(id = data["id"])
            price ,currency_sign= cleaning_price_calculator(response_model)
            cleaning_frequency = categorize("frequency_factors" , data["cleaning_frequency"])
            product_condition = categorize("condition_factor" , data["product_condition"])
            cleaning_price = price * product_condition * cleaning_frequency
            confidence = calculate_closeness(response_model)
            model = EstimateCleaningPrice.objects.create(response_model=response_model,cleaning_price=cleaning_price,currency_sign=currency_sign,cleaning_frequency=data.get("cleaning_frequency" , "one_time"),product_condition=data.get("product_condition" , "Good") , confidence=confidence)
            data = EstimateCleaningPriceSerializer(instance=model).data

            return Response(data , status.HTTP_200_OK)
        # except Exception as e:
        #     return Response({'message' : str(e) } , status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserPriceFeedbackView(APIView):
    def post(self , request):
        data = request.data
        model = EstimateCleaningPrice.objects.get(id=data["id"])
        user_price_feedback(model , data["user_price"])
        data = EstimateCleaningPriceSerializer(instance=model).data
        return Response(data , status.HTTP_200_OK)

class WebsiteReplaceView(APIView):
    def get(self , request , id):
        instance_model = ResponseDataModel.objects.get(id = id)
        similar_model = ResponseDataModel.objects.filter(input_query_model=instance_model.input_query_model)
        srz_data = ResponseDataSerializer(instance=similar_model , many=True , context={'request': request}).data
        return Response(srz_data)
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')