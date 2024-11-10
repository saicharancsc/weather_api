import './App.css';
import Card from './Components/Card';
import Button from './Components/Button';
import Input from './Components/Input';
import { useWeather } from './Context/Weather';
import {useEffect} from "react";

function App() {
  const weather=useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData()

  },[]);


  return (
    <div className='App'>
      <h1>Weather Forecast</h1>
      <div>
        <Input /> 
        <Button  onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <Button value="Refresh"/>

    </div>
  );
}

export default App;
