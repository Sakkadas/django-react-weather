import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';

import Input from '@mui/material/Input';

import axios from "axios";
import WeatherDisplay from "./components/weatherDisplay";
import Button from '@mui/material/Button';

const style = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        display: "center",
        width: 550,
        height: 250,
    },
    cardcss: {
        backgroundPosition: "center",
    },
}));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            newCities: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    cities: res.data
                });
            })
    }

    handleClick = () => {
        let city_name = document.getElementById('myLocation').value;
        axios.post("http://127.0.0.1:8000/api/add/", {city: city_name})
    };

    render() {
        const classes = this.props;
        return (
            <Grid className={classes.root} alignItems="center" container="justify">
                <Card className={classes.cardcss}>
                        {this.state.cities.map((city) => {
                            return <WeatherDisplay city={city}/>
                        })}

                    <Typography variant="h4" component="h2">
                        Прогноз погоды на сегодня
                    </Typography>
                    <br/>

                    <Input type="text" name="location" id="myLocation"
                           placeholder="City"/>
                    <FormHelperText>Введите название города: (например: Москва)</FormHelperText>

                    <Button variant="outlined">
                        <div onClick={this.handleClick}>Поиск</div>
                    </Button>

                </Card>
            </Grid>
        )
    }
}

export default App;
