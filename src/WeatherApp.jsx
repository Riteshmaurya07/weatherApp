import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
            city:"Delhi",
            temp: 29.5 ,
            tempMin: 28.5,
            tempMax: 30.5,
            humidity: 70,
            feelsLike: 30.5,
            weather: "cloudy",
        
    });   
    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox info={weatherInfo} />

        </div>  
    );
}