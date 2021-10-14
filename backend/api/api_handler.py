import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")


def weather_get(city):
    weather = json.loads(
        requests.get(
            f'http://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&appid={API_KEY}&units=metric').content.decode(
            'utf-8'))

    data = {
        'city': city,
        'country': weather['sys']['country'],
        'temperature': weather['main']['temp'],
        'feels_like': weather['main']['feels_like'],
        'weather_description': weather['weather'][0]['description'],
        'humidity': weather['main']['humidity'],
        'pressure': weather['main']['pressure'],
        'wind': round(weather['wind']['speed']),
        'longitude': weather['coord']['lon'],
        'latitude': weather['coord']['lat'],
        'weather_icon': weather['weather'][0]['icon'],
    }
    return data

# print(weather_get('Moscow'))  # test
