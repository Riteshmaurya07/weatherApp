import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Fullscreen } from '@mui/icons-material';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1524252500348-1bb07b83f3be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9nZ3klMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";
    const COLD_URL="https://media.istockphoto.com/id/1437208436/photo/old-manali-covered-with-fresh-snow-from-the-heavy-snowfall.jpg?s=612x612&w=0&k=20&c=PY3yqjSlAt2dvigVtz7_-hKSWIRJNd9KPilkdVkIYkc=";
    const RAIN_URL="https://images.unsplash.com/photo-1523920443222-1e71e5d09943?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
    
    return (
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h3>{info.city}
                            { info.humidity>80?<AcUnitIcon/>:info.temp>15?<WbSunnyIcon/>:<ThunderstormIcon/>}
                        </h3>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                       <p>Temperature= {info.temp}&#8451;</p>
                          <p>Min Temperature= {info.tempMin}&#8451;</p>
                            <p>Max Temperature= {info.tempMax}&#8451;</p>
                            <p>Humidity= {info.humidity}</p>
                            <p>Feels Like= {info.feelsLike}&#8451;</p>
                            <p>Weather= {info.weather}</p>
                            <p>
                                the weather can be described as <i>{info.weather} and feels like {info.feelsLike}</i>
                            </p>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}