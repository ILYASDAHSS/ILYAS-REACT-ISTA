import { useState, useEffect } from "react";
import "./Weather-Fetcher.css";
function Weather_Fetcher() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function fetchWeatherData() {
    const apiKey = "ac144ddf62baf3a549e9f3c4dda7096c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  }

  useEffect(() => {
    setCity("Rabat");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌦️ Weather Fetcher</h1>

      <input
        type="text"
        className="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="fetch-weather" onClick={fetchWeatherData}>
        Fetch Weather
      </button>

      <div className="weather-result">
        {weather ? (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>🌡️ {weather.main.temp}°C</p>
          </div>
        ) : (
          <p>No weather data yet</p>
        )}
      </div>
    </div>
  );
}

export default Weather_Fetcher;
