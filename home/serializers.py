from .models import InputQueryModel
from rest_framework import serializers
from .models import ResponseDataModel , EstimateCleaningPrice
from django.http import HttpRequest
from urllib.parse import quote

class ResponseDataSerializer(serializers.ModelSerializer):
    integrated_website = serializers.SerializerMethodField()
    # website= serializers.SerializerMethodField()
    class Meta:
        model = ResponseDataModel
        exclude = ['input_query_model']
    
    # def get_website(self,obj):
    #     return quote(obj.website)
    
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
        
