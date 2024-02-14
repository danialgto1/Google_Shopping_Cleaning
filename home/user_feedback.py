import json
import re
from.categorize import categorize

def user_price_feedback(model , user_price):
    model.user_cleaning_price = user_price
    model.save()
    new_object = {
    "Description":model.response_model.input_query_model.search_query,
    "price_factor": model.response_model.input_query_model.price_factor,
    "surface_factor": model.response_model.input_query_model.surface_factor,
    "material_factor": model.response_model.input_query_model.material_factor,
    "Cost Ave.": float(re.findall(r"[\d,\.]+",model.response_model.estimated_price)[0]) ,
    "XM": user_price,
    }
    with open("sample_data.json" , "r") as file:
        data = json.load(file)
    
    data.append(new_object)
    
    with open("sample_data.json" , "w") as file:
        json.dump(data, file, indent=2)
    
    return True