from rest_framework import status
from .api_handler import weather_get
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Weather
from .serializers import WeatherSerializer


class GetWeather(APIView):
    """Display all weather forecasts models"""

    def get(self, request):
        for weather in Weather.objects.all():
            data = weather_get(weather.city)
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
    """
    Example POST request
    {"city": "Moscow"}
    """

    def post(self, request):
        city_name = request.data['city']
        city_to_delete = Weather.objects.filter(city=city_name)
        message = F'City {city_name} was successfully deleted'
        for c in city_to_delete:
            c.delete()
        return Response({'message': message})


class Add(APIView):
    """
    Example POST request
    {"city": "Moscow"}
    or Russian
    {"city": "Москва"}
    """

    def post(self, request):
        city_name = request.data['city']
        serializer = WeatherSerializer(data=self.request.data)

        if len(Weather.objects.filter(city=city_name)) > 0:
            return Response(f'Error... {city_name} already in the API.')

        if serializer.is_valid():
            serializer.save()
            serializer.data.get(city_name)
            message = F'City {city_name} was successfully added'
            return Response({'message': message})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
