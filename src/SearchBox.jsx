import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function SearchBox({updateWeatherInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7d8b37fc1281aea5e3a4764e2e402f58";

    const [city, setCity] = useState('');
    const[error,setError]=useState(false);
    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            const result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
            throw error;
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (event) => {
       try{
        event.preventDefault();
        console.log("City:", city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateWeatherInfo(newInfo);
        setError(false);


       }catch(err){
            setError(true); 
       }
        
       
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    style={{backgroundColor:"white"}}
                />
                <br /><br />
                <Button variant="contained" type='submit' style={{marginBottom:22}} >Search</Button>
                {error && <p style={{color:"red"}}>City not found</p>}
            </form>
        </div>
    );
}
