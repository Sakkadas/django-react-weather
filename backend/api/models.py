from django.db import models


class Weather(models.Model):
    city = models.CharField(max_length=120)
    country = models.TextField(max_length=50, blank=True)
    temperature = models.IntegerField(default=0, blank=True)
    feels_like = models.IntegerField(default=0, blank=True)
    weather_description = models.CharField(max_length=120, blank=True)
    humidity = models.IntegerField(default=0, blank=True)
    pressure = models.IntegerField(default=0, blank=True)
    wind = models.IntegerField(default=0, blank=True)
    longitude = models.CharField(max_length=20, blank=True)
    latitude = models.CharField(max_length=20, blank=True)
    weather_icon = models.CharField(max_length=6, blank=True)

    def __str__(self):
        return self.city

    @property
    def to_dict(self):
        data = {
            'city': self.city,
            'country': self.country,
            'temperature': self.temperature,
            'feels_like': self.feels_like,
            'weather_description': self.weather_description,
            'humidity': self.humidity,
            'pressure': self.pressure,
            'wind': self.wind,
            'longitude': self.longitude,
            'latitude': self.latitude,
            'weather_icon': self.weather_icon,
        }
        return data
