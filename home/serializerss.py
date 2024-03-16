from .models import InputQueryModel
from rest_framework import serializers
from .models import ResponseDataModel , EstimateCleaningPrice
import numpy as np
from home.utils import get_price_value


class ResponseDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = ResponseDataModel
        exclude = ['input_query_model']


    
class ResponseDataSerializerWithConfidence(serializers.ModelSerializer):
    integrated_website = serializers.SerializerMethodField()
    confidence_percentage= serializers.SerializerMethodField()
    filter_by_purchase_link=serializers.SerializerMethodField()
    purchase_link = serializers.SerializerMethodField()
    class Meta:
        model = ResponseDataModel
        exclude = ['input_query_model']
    
    def get_purchase_link(self,obj):
        return obj.input_query_model.purchase_link
    
    def get_filter_by_purchase_link(self,obj):
        return obj.input_query_model.filter_by_purchase_link
    
    def get_confidence_percentage(self,obj):
        instances = ResponseDataModel.objects.filter(input_query_model = obj.input_query_model)
        data = ResponseDataSerializer(instance=instances , many=True).data
        try:
            numbers = [get_price_value(i["estimated_price"]) for i in data ]
            mean = np.mean(numbers)
            std_dev = np.std(numbers)
            
            if mean == 0:
                return 0
        
            coefficient_of_variation = std_dev / mean
            closeness_percentage = (1 - coefficient_of_variation) * 100
            
            return closeness_percentage
        except Exception:
            return 0
    def get_integrated_website(self , obj):
        request = self.context.get('request')
        if request is not None:
            if 'HTTP_X_FORWARDED_PROTO' in request.META:
                protocol = request.META['HTTP_X_FORWARDED_PROTO']
            else:
                protocol = 'http'  # Default to http if header not present
            return f"{protocol}://{request.get_host()}/website_replace/{obj.id}"
        return None 

class InputQuerySerializer(serializers.ModelSerializer):
    

    class Meta:
        model = InputQueryModel
        fields = '__all__'

    def validate(self, attrs):
        search_query = attrs.get('search_query' , '')
        user_voice = attrs.get('user_voice' , '')
        if not search_query and not user_voice:
            raise serializers.ValidationError('You must provide at least one of search query or voice')
        return super().validate(attrs)
    

class EstimateCleaningPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstimateCleaningPrice
        fields = "__all__"
        