from django.urls import path
from . import views


urlpatterns = [
    path('' , views.HomeView.as_view() ),
    path('calculate/', views.CleaningPriceView.as_view()),
    path('feedback/' , views.UserPriceFeedbackView.as_view()),
    path('website_replace/<int:id>' , views.WebsiteReplaceView.as_view())
]
