import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <h3>{weatherData.name}, {weatherData.sys.country}</h3>
      <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
      <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
      <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
