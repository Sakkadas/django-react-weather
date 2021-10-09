from django.db import models


class Weather(models.Model):
    id_city = models.CharField(max_length=20)
    city = models.CharField(max_length=120)
    country = models.TextField(max_length=50)
    temperature = models.IntegerField(default=0)
    feels_like = models.IntegerField(default=0)
    weather_description = models.CharField(max_length=120)
    humidity = models.IntegerField(default=0)
    pressure = models.IntegerField(default=0)
    wind = models.IntegerField(default=0)
    longitude = models.CharField(max_length=20)
    latitude = models.CharField(max_length=20)
    weather_icon = models.CharField(max_length=6)

    def __str__(self):
        return self.city

    @property
    def to_dict(self):
        data = {
            'id_city': self.id,
            'city': self.city,
            'country': self.country,
            'temperature': self.temperature,
            'weather_description': self.weather_description,
            'humidity': self.humidity,
            'pressure': self.pressure,
            'wind': self.wind,
            'longitude': self.longitude,
            'latitude': self.latitude,
            'weather_icon': self.weather_icon,
        }
        return data
