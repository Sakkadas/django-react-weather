import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import styled from 'styled-components';
import {Windicss} from '@styled-icons/simple-icons/Windicss'
import {Droplet} from '@styled-icons/icomoon/Droplet'
import {Timer2} from '@styled-icons/remix-line/Timer2'
import Button from '@mui/material/Button';

require('dotenv').config()

const WindicssIcon = styled(Windicss)`
    justify: center;
  height: 75px;
  width: 75px;
`

const DropletIcon = styled(Droplet)`
    justify: center;
  height: 75px;
  width: 75px;  
`
const Timer2Icon = styled(Timer2)`
    justify: center;
  height: 75px;
  width: 75px;
`
const WeatherIcon = styled.img`
  display: block;
  height: 75px;
  width: 75px;
`;

function handleRemoveClick(city_name) {
    axios.post("http://127.0.0.1:8000/api/remove/", {city: city_name})
}

const WeatherDisplay = (props) => {
    const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY

    const Unsplash_url = `https://api.unsplash.com/search/photos?query=${props.city.city}&client_id=${UNSPLASH_API_KEY}`

    const icon = props.city.weather_icon
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    const [result, setResult] = useState([]);

    useEffect(() =>
        axios.get(Unsplash_url).then((response) => {
            console.log(response)
            setResult(response.data.results[0].urls.thumb)
            // full, raw, regular, small, thumb
        }), [])

    return (
        <div>
            <div>
                <img src={result}></img>
            </div>
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h2" color="textPrimary">
                            {props.city.city},{props.city.country}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            {props.city.longitude}, {props.city.latitude}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                    <Box p={0}>
                        <Typography variant="h4" color="textPrimary">
                            Температура: {props.city.temperature}
                            <span>&#176;</span>
                            {"C"}
                            <Typography variant="h6" color="textSecondary">
                                Ощущается как {props.city.feels_like}
                                <span>&#176;</span>
                                {"C"}
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                    <Box p={0}>
                        <Typography variant="h4" color="textPrimary">
                            <WeatherIcon src={iconUrl}/>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                    <Box p={0}>
                        <Typography variant="h6" color="textSecondary">
                            {props.city.weather_description}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Влажность: <b>{props.city.humidity}</b>%
                            <hr/>
                            <DropletIcon/>
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Давление: <b>{props.city.pressure}</b> Па
                            <hr/>

                            <Timer2Icon/>
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Ветер: <b>{props.city.wind}</b> км/ч
                            <hr/>
                            <WindicssIcon/>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button>
                <div onClick={() => {
                    handleRemoveClick(props.city.city)
                }}>Remove
                </div>
            </Button>
        </div>
    );
}


export default WeatherDisplay;



