import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import "./InfoBox.css";


export default function InfoBox({info}) {
  
    const INIT_URL = "https://img.freepik.com/free-photo/beautiful-natural-landscape_23-2151839236.jpg?semt=ais_hybrid&w=740&q=80"
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    const HOT_URL = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
    const COLD_URL = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";

    return (
    <div className="InfoBox">

    <div className="card-container">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80? <BeachAccessIcon/>: info.temp>15? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temperature={info.tempMin}&deg;C</p>
         <p>Max Temperature={info.tempMax}&deg;C</p>
         <p>
            The wheather is <b>{info.weather}</b> and feels-like={info.feelslike}&deg;C
         </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
   </div> 
  );
}