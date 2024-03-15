import numpy as np
from home.models import  ResponseDataModel
from home.serializerss import ResponseDataSerializer
from home.utils import get_price_value

def calculate_closeness(response_model):
    instances = ResponseDataModel.objects.filter(input_query_model = response_model.input_query_model)
    data = ResponseDataSerializer(instance=instances , many=True).data
    numbers = [get_price_value(i["estimated_price"]) for i in data ]
    mean = np.mean(numbers)
    std_dev = np.std(numbers)
    
    if mean == 0:
        return 0
    
    coefficient_of_variation = std_dev / mean
    closeness_percentage = (1 - coefficient_of_variation) * 100
    
    return closeness_percentage
