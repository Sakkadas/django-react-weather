import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./weatherForecast5Days";
import '../App.css'


require('dotenv').config()


export default function WeatherForecastOneCall(props) {
    let [isLoad, setIsLoad] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setIsLoad(false);
    }, []);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setIsLoad(true);
    }

    function load() {
        const REACT_APP_apiKeyUnsplash = process.env.REACT_APP_API_KEY;
        const longitude = 37.6156;
        const latitude = 55.7522;
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}`
            +`&lon=${longitude}&appid=${REACT_APP_apiKeyUnsplash}&units=metric`;
        // console.log(latitude)
        // console.log(longitude)
        axios.get(apiUrl).then(handleResponse);
    }

    if (isLoad) {
        return (
            <div className="WeatherForecast">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>);
                    } else {
                        return null;
                    }
                })}</div>);
    } else {
        load();
        return null;
    }
}
