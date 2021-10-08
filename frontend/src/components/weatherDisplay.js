import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";


function Display({weatherReport}) {
    let lon = weatherReport.coord.lon;
    let lat = weatherReport.coord.lat;
    let weathermain = weatherReport.weather[0].main;
    let weatherdiscription = weatherReport.weather[0].description;
    let temp = weatherReport.main.temp;
    let pressure = weatherReport.main.pressure;
    let humidity = weatherReport.main.humidity;
    let wind = weatherReport.wind.speed;
    let country = weatherReport.sys.country;
    let city = weatherReport.name;

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
                        <Typography variant="h6" color="textSecondary">
                            {weatherdiscription}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Влажность: {humidity} %
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Давление: {pressure} Па
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h6" color="textPrimary">
                            Ветер: {wind} км/ч
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </div>
    );
}

export default Display;