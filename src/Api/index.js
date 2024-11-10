
const baseURL="https://api.weatherapi.com/v1/current.json?key=d347b8b32c3d4a068a2170417240408"
export const getWeatherDataForCity = async(city) =>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};

export const getWeatherDataForLocation = async(lat,long) =>{
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return await response.json();
};