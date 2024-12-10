import React from "react";

const Forecast = ({ forecasts }) => {
  // Filter to get one forecast per day (e.g., data at 12:00 PM each day)
  const dailyForecasts = forecasts.filter(forecast => forecast.dt_txt.includes("12:00:00"));

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div className="row">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="col-md-2 forecast bg-primary text-white m-2 rounded">
            <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
            <p>Temp: {forecast.main.temp} &#176;C</p>
            <p>Humidity: {forecast.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
