import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast5Days(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        console.log(date, 'DATE!!!!')
        let day = date.getDay();

        let days = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."];
        return days[day];
    }

    return (
        <div>
            <div>{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={45}/>
            <div>
                <span style={{fontSize: '15px'}}>{maxTemperature()}</span>
                <span style={{fontSize: '20px',}}>  |  </span>
                <span style={{fontSize: '15px'}}>{minTemperature()}</span>
            </div>
        </div>
    );
}
