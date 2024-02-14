import json
import re
from .apps import classifier


def calculator(values , price,product_condition , cleaning_frequency):
        frequency_factors = {
            "one-time": 1.0,
            "monthly": 0.9,
            "bi-weekly": 0.8,
        }
        condition_factor ={
            "VeryDirty":1.8,
            "Dirty" : 1.6,
            "Good":1.2
        }
        hourly_rate= 20
        appliance_factor = values.get("appliance_type_factor", 1.0)
        size_factor = values.get("size_factor", 1.0)
        selected_product_price_factor = price / 100.0  # Assuming the product price is in dollars
        print(hourly_rate , appliance_factor , size_factor , condition_factor.get('product_condition' , 1.2), frequency_factors.get('cleaning_frequency' , 1.2) , selected_product_price_factor)
        price =hourly_rate * appliance_factor * size_factor * condition_factor.get('product_condition' , 1.2)* condition_factor.get('product_condition' , 1.2)* selected_product_price_factor
        
        return price
        
def categorize_content(product_tree, sequence, address=""):
    labels = list(product_tree.keys())
    hypothesis_template = 'This text is about {}.'
    prediction = classifier(sequence, labels, hypothesis_template=hypothesis_template, multi_class=True)
    best_match = prediction["labels"][0]
    address += f">{best_match}"

    if not product_tree[best_match].get("price_factor"):
        return categorize_content(product_tree[best_match], sequence, address)
    else:
        return [address, product_tree[best_match]]
    
def categorize_base_on_json(model):
    with open("category.json" , "r") as file:
        product_tree = json.loads(file.read())
    addr , values = categorize_content(product_tree , model.search_query)
    model.price_factor = values["price_factor"]
    model.surface_factor = values["surface_factor"]
    model.material_factor = values["material_factor"]
    model.save()
    
def grab_specs(description , price , product_condition , cleaning_frequency  ):
    with open("category.json" , "r") as file:
        product_tree = json.loads(file.read())
    addr , values = categorize_content(product_tree , description)
    currency_sign = price[0] if isinstance(price[0] , str) else None
    price = float(re.findall(r"[\d,\.]+",price)[0])
    cleaning_price = calculator(values , price , product_condition , cleaning_frequency)
    result = {
        "currency_sign" : currency_sign,
        "address": addr,
        "cleaning_price" : cleaning_price,
        "cleaning_frequency" :  cleaning_frequency,
        "product_condition" : product_condition,
    }
    for k , v in values.items():
        result[k] = v
    return result
    