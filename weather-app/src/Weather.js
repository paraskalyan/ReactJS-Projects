import { useEffect, useState } from "react";

const Weather = ()=>{
    const [currentcity, setCurrentcity] = useState('');
    const[weatherdata, setWeatherdata] = useState(null);
    const [city, setCity] = useState("");
    const [found, setFound] = useState(null);
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
        fetch(url)
            .then(response => response.json())
            .then(data=>{
                console.log(data)
                setWeatherdata(data);
                if(data.cod == 404){
                    setFound(0);
                    return
                }
                else{
                    setFound(1);
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
                {found === 0 || city === ""?<h1>Data not found. Search for your city</h1>:
                weatherdata && (
                    <>
                        <h1 className="city">{weatherdata.city.name}</h1>
                        <h3 className="temprature">{weatherdata.list[0].main.temp}&deg;C</h3>
                        <h2>{weatherdata.list[0].weather[0].main}</h2> 
                        <p>Feels like:- {weatherdata.list[0].main.feels_like}</p>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Weather;
