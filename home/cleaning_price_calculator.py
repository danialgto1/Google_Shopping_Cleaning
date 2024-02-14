import json
import re
from .apps import classifier


        
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
    

    