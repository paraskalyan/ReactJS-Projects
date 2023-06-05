import { useEffect, useState } from "react";
import rainyimg from './images/rainy.png';
import sunnyimg from './images/sunny-removebg-preview.png';
import cloudyimg from './images/cloudy.png';
const Weather = ()=>{
    var weather;
    const[weatherdata, setWeatherdata] = useState(null);
    const [city, setCity] = useState("Ludhiana");
    const [found, setFound] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imgpath, setImgPath]  = useState('')
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a56a608cff2e97bc759c291495588ef0&units=metric`;
    useEffect(()=>{
        const timer = setTimeout(() => {
            if (city.trim()) {
              fetchData(city);
            }
          }, 600);
          return () => clearTimeout(timer);
        
    },[city]);

    function fetchData(){
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data=>{
                console.log(data)
                setWeatherdata(data);
                
                if(data.cod == 404){
                    setLoading(false)
                    setFound(0);
                    return
                }
                else{
                    setFound(1);
                    weather = data.list[0].weather[0].main;
                    if(weather === 'Rain') setImgPath(rainyimg);
                    else if(weather == 'Clouds') setImgPath(cloudyimg);
                    else if(weather == 'Clear') setImgPath(sunnyimg);
                    setLoading(false)
                }

    })
}
    const handleChange = (e)=>{
        setCity(e.target.value);
    }
    return(
        <div className="container">
            <div className="header">ReactWeather</div>
            <div className="weather-content">
                <input type="text" placeholder="search for a city" className="input-city" value={city} onChange={handleChange}></input>
                {loading ?(<h1>Loading...</h1>):
                found === 0 ? (<h1>City not found...</h1>):
                weatherdata && (
                    <>
                        <h1 className="city">{weatherdata.city.name}</h1>
                        <h3 className="temprature">{weatherdata.list[0].main.temp}&deg;C</h3>
                        <h2>{weatherdata.list[0].weather[0].main}</h2> 
                        <b>Feels like:- {weatherdata.list[0].main.feels_like}</b>
                        <b>Humidity:- {weatherdata.list[0].main.humidity}</b>
                        <img alt="rain" src={imgpath} width='170'></img>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Weather;
