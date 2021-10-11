from rest_framework import status
from rest_framework.decorators import api_view
from .api_handler import weather_get
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Weather
from .serializers import WeatherSerializer


class GetWeather(APIView):
    def get(self, request):
        for weather in Weather.objects.all():
            data = weather_get(weather.city)
            weather.id = data['id']
            weather.city = data['city']
            weather.country = data['country']
            weather.temperature = data['temperature']
            weather.feels_like = data['feels_like']
            weather.weather_description = data['weather_description']
            weather.humidity = data['humidity']
            weather.pressure = data['pressure']
            weather.wind = data['wind']
            weather.longitude = data['longitude']
            weather.latitude = data['latitude']
            weather.weather_icon = data['weather_icon']
            weather.save()
        r = Weather.objects.all()
        serializer = WeatherSerializer(r, many=True)
        return Response(serializer.data)


class RemoveCity(APIView):
    def post(self, request):
        city_name = request.data['city']
        city_to_delete = Weather.objects.filter(city=city_name)
        for c in city_to_delete:
            c.delete()
        return Response(f'Deleted {city_name}.')


class Add(APIView):
    def post(self, request):
        serializer = WeatherSerializer(data=self.request.data)
        city_name = request.data['city']
        if serializer.is_valid():
            serializer.save()
            serializer.data.get(city_name)
            message = 'Success'
            return Response({'message': message})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
