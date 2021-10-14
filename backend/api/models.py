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
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.city

    class Meta:
        verbose_name_plural = 'Прогнозы погоды'
        verbose_name = 'Прогноз погоды'
        ordering = ['-created_at']