from django.urls import path

from .views import GetWeather

urlpatterns = [
    path('', GetWeather.as_view()),
]
