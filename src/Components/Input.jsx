import React from "react";
import {useWeather} from "../Context/Weather";

const Input  = () =>{
    const weather=useWeather();
    return(
        <input className="Input_Field"
        type="text" 
        placeholder="Enter City Name" 
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    )
}
export default Input;