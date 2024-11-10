import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () =>{
    const weather=useWeather();
    console.log(weather)
    return(
        <div className="Card">
            <img src={weather.data?.current?.condition?.icon} />
            <h2>Celsius:{weather.data?.current?.temp_c}</h2>
            <h5>{weather.data?.location?.name},{weather.data?.location?.region} </h5>
            


        </div>
    )
};
export default Card; 
 