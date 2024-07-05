import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем Bootstrap
import './App.css'; // Подключаем пользовательские стили

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = '1ce2c8f1225f14bf33b893989c1548cf';

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Weather App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={fetchWeather}
            disabled={!city || loading}
          >
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </div>
      </div>
      {weatherData && (
        <div className="card">
          <div className="card-body">
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
