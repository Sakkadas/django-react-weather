import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")


def weather_get(API_KEY, city):
    weather = json.loads(
        requests.get(
            f'http://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&appid={API_KEY}&units=metric').content.decode(
            'utf-8'))

    city_name = weather['name']

    data = {
        'id': weather['id'],
        'city': city,
        'country': weather['sys']['country'],
        'temperature': weather['main']['temp'],
        'feels_like': weather['main']['pressure'],
        'weather_description': weather['weather'][0]['description'],
        'humidity': weather['main']['humidity'],
        'pressure': weather['main']['pressure'],
        'wind': weather['wind'],
        'longitude': weather['coord']['lon'],
        'latitude': weather['coord']['lat'],
        'weather_icon': weather['weather'][0]['icon'],
    }
    return weather


print(weather_get(API_KEY, 'Moscow'))  # test
