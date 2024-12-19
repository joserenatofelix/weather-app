import { useState, useEffect } from "react";
import { fetchWeather } from "../services/weatherService";

export const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather(city).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, [city]);

  return { weather, loading };
};
