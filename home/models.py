from django.db import models
from django.forms import CharField
from django.utils.timezone import now

def voice_upload_path(instance , filename):
    return f'uploads/{now().year}/{now().month}/{filename}.mp3'

class InputQueryModel(models.Model):
    image_url = models.CharField(max_length=300)
    user_voice = models.FileField(upload_to=voice_upload_path, blank=True , null=True)
    search_query = models.CharField( max_length=200 , blank=True , null=True)
    product_qty = models.IntegerField(default=60)
    price_factor = models.FloatField(default= 1)
    surface_factor = models.FloatField(default= 1)
    material_factor = models.FloatField(default= 1)
    date = models.DateTimeField( auto_now_add=True)

class ResponseDataModel(models.Model):
    input_query_model = models.ForeignKey(InputQueryModel , on_delete=models.CASCADE , related_name= 'response_data_model')
    description = models.TextField(blank=True , null= True)
    website = models.TextField(blank=True , null= True)
    image = models.TextField(blank=True , null= True)
    specs = models.CharField(max_length=50 , blank=True , null = True)
    image_bytes = models.TextField(blank=True , null= True)
    estimated_price = models.CharField(blank=True , null= True , max_length=50)
    
    def __str__(self) -> str:
        return f"{self.id}"

class EstimateCleaningPrice(models.Model):
    response_model = models.ForeignKey(ResponseDataModel , on_delete=models.CASCADE , related_name = "estimate_cleaning_price")
    cleaning_price = models.FloatField(blank = True , null= True)
    currency_sign = models.CharField(max_length = 10)
    cleaning_frequency = models.CharField(default = "one_time", max_length=20)
    product_condition = models.CharField(default ="Good", max_length=20 )
    user_cleaning_price = models.FloatField(blank = True , null= True)
    confidence = models.FloatField(blank=True , null=True)
    
