import axios from "axios";

require('dotenv').config();

const API_KEY =  process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_URL


export const fetchWeather = async (query) => {
    const {data} = await axios.get(API_URL, {
        params: {
            q: query,
            lang: 'ru',
            units: 'metric',
            APPID: API_KEY,

        }
    });

    return data;
}