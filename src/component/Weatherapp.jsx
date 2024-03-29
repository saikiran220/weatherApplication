import React from 'react'
import { useState } from 'react';

const Weatherapp = () => {   
const api = {
    key: "2d4cab246034e3a884166596a5acd784",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

 
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
    
  return (
    <div className="App">
    <header className="App-header">
      {/* HEADER  */}
      <h1 >Weather App</h1>

      {/* Search Box - Input + Button  */}
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <button onClick={searchPressed}>Search</button>
      </div>

      {/* If weather is not undefined display results from API */}
      {typeof weather.main !== "undefined" ? (
        <div>
          {/* Location  */}
          <p>{weather.name}</p>

          {/* Temperature Celsius  */}
          <p>{weather.main.temp}°C</p>

          {/* Condition (Sunny ) */}
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
      ) : (
        ""
      )}
    </header>
  </div>
  )
}

export default Weatherapp
