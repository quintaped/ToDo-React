import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Weather.module.css';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_KEY = 'b8c77be1380c5bd538065e525b76457c';

const Weather = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  useEffect(async () => {
    const data = await fetch(`${WEATHER_URL}?appid=${WEATHER_KEY}&q=Dnipro&units=metric&lang=en`).then((r) => r.json());
    setWeatherData(data);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <div>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}</p>
      <p>Today -  {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;