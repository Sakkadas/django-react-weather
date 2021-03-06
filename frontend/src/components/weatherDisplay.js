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
import {Delete} from '@styled-icons/material-rounded/Delete';
import WeatherForecastOneCall from "./weatherForecastOneCall";
import WeatherIcon from "./weatherIcon";

require('dotenv').config()

const WindicssIcon = styled(Windicss)`
  height: 50px;
  width: 50px;
`

const DropletIcon = styled(Droplet)`
  height: 50px;
  width: 50px;  
`
const Timer2Icon = styled(Timer2)`
  height: 50px;
  width: 50px;
`

function handleRemoveClick(city_name) {
    axios.post("http://127.0.0.1:8000/api/remove/", {city: city_name})
    window.location = "http://localhost:3000/"
}

const WeatherDisplay = (props) => {
    const REACT_APP_apiKeyUnsplash = process.env.REACT_APP_UNSPLASH_API_KEY
    const Unsplash_url = `https://api.unsplash.com/search/photos?query=${props.city.city}&client_id=` +
        REACT_APP_apiKeyUnsplash
    const [weatherData, setWeatherData] = useState({ready: false});
    const [result, setResult] = useState([]);

    useEffect(() =>
        axios.get(Unsplash_url).then((response) => {
            setResult(response.data.results[0].urls.small)
            // console.log(response)
            // json fields full, raw, regular, small, thumb
        }), [])

    return (<React.Fragment>
            <div>
                <CardContent style={{backgroundColor: "#f1f1f1"}}>
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
                            <img style={{width: "300"}} src={result}></img>
                            <Typography variant="h4" color="textPrimary">
                                ??????????????????????: {props.city.temperature}
                                <span>&#176;</span>
                                {"C"}
                                <Typography variant="h6" color="textSecondary">
                                    ?????????????????? ?????? {props.city.feels_like}
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
                                <WeatherIcon code={props.city.weather_icon}/>
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
                                ??????????????????: <b>{props.city.humidity}</b>%
                                <hr/>
                                <DropletIcon/>
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                                ????????????????: <b>{props.city.pressure}</b> ????
                                <hr/>
                                <Timer2Icon/>
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                                ??????????: <b>{props.city.wind}</b> ????/??
                                <hr/>
                                <WindicssIcon/>
                            </Typography>
                        </Box>
                    </Box>
                    <WeatherForecastOneCall />
                </CardContent>
                <Button style={{backgroundColor: '#901B02', color: '#F1F1F1'}}
                        type='submit'
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            handleRemoveClick(props.city.city)
                        }}>
                    Delete
                    <Delete style={{width: "20px"}}/>
                </Button>
            </div>
        </React.Fragment>
    );
}
export default WeatherDisplay;



