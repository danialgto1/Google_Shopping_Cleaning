from PIL import Image
import base64
import os
import re
from user_agent import generate_user_agent
from io import BytesIO
import threading
import requests
from urllib.parse import urlparse



result_lock = threading.Lock()  # Lock to protect dictionary updates

# this function used to download and encrypt all google lens result thumbnails
def get_image_bytes(product):
    url = product['image']
    image_data = image_to_json(url)
    with result_lock:
        product['image_bytes'] = image_data

# This function try to determine product type bye name or description


def json_to_image( raw_data , file_name , directory):
    try:
        # Decode the Base64 image data
        image_data = base64.b64decode(raw_data)
        image_save(image_data=image_data , directory=directory , file_name=file_name)
    except Exception as error:
        return f'failed to save{file_name}, reason = {error}'

def image_to_json(url):
    try:
        # Convert image to Base64 encrypted data
        user_agent = generate_user_agent()
        image = requests.get(url , headers={'User-Agent':user_agent})
        return base64.encodebytes(image.content).decode('utf-8')
    except Exception as error:
        return f'cant access to this file please download it manually, reason =  {error}'

def image_save(directory , file_name , image_data):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)

        # Create a BytesIO object to read image data
        image_stream = BytesIO(image_data)

        # Open the image using PIL
        img = Image.open(image_stream)

        # Save the image as JPG
        img_path = os.path.join(os.path.abspath(f'{directory}'), f'{file_name}')
        img.save(img_path, format='JPEG')

    except Exception as error:
        return (error)

def get_price_value(price):
    price = float(re.findall(r"[\d,\.]+",price)[0])
    return price

def get_currency_sign(price):
    currency_sign = price[0] if isinstance(price[0] , str) else None
    return currency_sign

def get_domain(link):
    parsed_link = urlparse(link)
    if parsed_link.netloc:
        return parsed_link.netloc
    else:
        return None


def filter_by_purchase_link(input_model , products):
    purchase_domain = get_domain(input_model.purchase_link)
    new_products=[]
    if input_model.purchase_link and purchase_domain :
        for product in products:
            product_website_domain = get_domain(product["website"])
            if  product_website_domain and purchase_domain ==product_website_domain:
                new_products.append(product)
        if len(new_products) >1:
            input_model.filter_by_purchase_link=True
            input_model.save()
            return new_products
    return products