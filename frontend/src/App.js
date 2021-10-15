import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';

import Input from '@mui/material/Input';

import WeatherDisplay from "./components/weatherDisplay";
import Button from '@mui/material/Button';


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
        let city_name = document.getElementById('city_target').value;
        axios.post("http://127.0.0.1:8000/api/add/", {city: city_name})
        window.location = "http://localhost:3000/" + city_name;
    };

    render() {
        return (<React.Fragment>
                <Grid style={{marginTop: "65px", backgroundColor: '#f1f1f1'}} container justify="center">

                    <Card>
                        <Typography style={{textAlign: 'center'}} variant="h4" component="h2">
                            Прогноз погоды на сегодня
                        </Typography>
                        <br/>

                        <Input style={{width: '100%'}} type="text" name="location" id="city_target"
                               placeholder="Город"/>
                        <FormHelperText>Введите название города: (например: Москва или англ. Moscow)</FormHelperText>

                        <Button variant="outlined">
                            <div onClick={this.handleClick}>Поиск</div>
                        </Button>
                        {this.state.cities.map((city) => {
                            return <React.Fragment>
                                <article style={{margin: '15px'}}>
                                    <WeatherDisplay city={city}>
                                    </WeatherDisplay>
                                </article>
                            </React.Fragment>
                        })}
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }
}

export default App;
