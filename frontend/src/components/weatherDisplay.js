import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import styled from 'styled-components';
import {Windicss} from '@styled-icons/simple-icons/Windicss'
import {Droplet} from '@styled-icons/icomoon/Droplet'
import {Timer2} from '@styled-icons/remix-line/Timer2'


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
const windicssIcon = () => <WindicssIcon/>

const dropletIcon = () => <DropletIcon/>

const timer2Icon = () => <Timer2Icon/>


const WeatherIcon = styled.img`
  display: block;
  height: 75px;
  width: 75px;
`;

function Display({weatherReport}) {
    const lon = weatherReport.coord.lon;
    const lat = weatherReport.coord.lat;
    const weatherDescription = weatherReport.weather[0].description;
    const temp = weatherReport.main.temp;
    const pressure = weatherReport.main.pressure;
    const humidity = weatherReport.main.humidity;
    const wind = weatherReport.wind.speed;
    const country = weatherReport.sys.country;
    const city = weatherReport.name;

    const icon = weatherReport.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    return (
        <div>
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h2" color="textPrimary">
                            {city},{country}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            {lon}, {lat}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                    <Box p={0}>
                        <Typography variant="h4" color="textPrimary">
                            Температура: {temp}
                            <span>&#176;</span>
                            {"C"}
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
                            {weatherDescription}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Влажность: {humidity}
                            %
                            <DropletIcon/>
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Давление: {pressure} Па
                            <Timer2Icon/>
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Ветер: {wind} км/ч
                            <WindicssIcon/>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </div>
    );
}

export default Display;