from django.urls import path

from .views import GetWeather, Add, RemoveCity

urlpatterns = [
    path('', GetWeather.as_view()),
    path('add/', Add.as_view()),
    path('remove/', RemoveCity.as_view())
]
