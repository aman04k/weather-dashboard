import React, { useState } from "react";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  // Update fetchWeather to use city
  const fetchWeather = async (city) => {
    if (!city) return; // If city is empty, don't make the API call

    try {
      // Current weather API call
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const weather = await weatherResponse.json();

      // 5-Day forecast API call
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const forecast = await forecastResponse.json();

      if (weatherResponse.ok && forecastResponse.ok) {
        setWeatherData(weather);
        setForecastData(forecast);
        setError(null);
      } else {
        setError("City not found or invalid response from server.");
        setWeatherData(null);
        setForecastData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Unable to fetch data. Please try again later.");
    }
  };

  return (
    <div className="app-container">
      <Header />
      <SearchForm onSearch={fetchWeather} setCity={setCity} />
      {error && <p className="text-danger">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {forecastData && <Forecast forecasts={forecastData.list} />}
    </div>
  );
};

export default App;
