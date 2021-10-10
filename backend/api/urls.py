from django.urls import path

from .views import GetWeather, RemoveCity

urlpatterns = [
    path('', GetWeather.as_view()),
    path('remove/', RemoveCity.as_view())
]
