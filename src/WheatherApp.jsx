import SearchBox from "../SearchBox";
import InfoBox from "../InfoBox";
import { useState } from "react";

export default function WheatherApp(){
    const[wheatherInfo, setWheatherInfo] = useState({
        city: "Bhopal",
        feelslike: 24.8,
        temp: 25.5,
        tempMin: 25.5,
        tempMax: 25.5,
        humidity: 47,
        wheather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWheatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"black"}}>Wheather app by aditya</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={wheatherInfo}/>
        </div>
    );
}