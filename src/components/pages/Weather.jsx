import Searchbar from "../atoms/Searchbar";
import TemperatureInfo from "../organisms/TemperatureInfo";
import style from "./Weather.module.scss";
import MiscInfo from "../organisms/MiscInfo";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = (searchTerm) => {
    setLoading(true);
    getWeatherData(searchTerm);
  };

  const getWeatherData = async (searchTerm) => {
    setErrorMsg("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ab0f54a57cc1277f45830d3aebbcf28e`,
        { mode: "cors" }
      );

      const data = await response.json();
      if (response.ok) {
        formatWeatherData(data);
      } else {
        setErrorMsg(data.message);
      }
    } catch (err) {
      setErrorMsg("something went wrong");
      setLoading(false);
    }
    setLoading(false);
  };

  const formatWeatherData = (data) => {
    const newData = {};
    newData.location = data.name;
    newData.main = data.weather[0].main.toLowerCase();
    newData.desc = data.weather[0].description;
    newData.tempC = (data.main.temp - 273.15).toFixed(2);
    newData.humidity = data.main.humidity;
    newData.windspeed = data.wind.speed;
    newData.feelsLike = (data.main.feels_like - 273.15).toFixed(2);
    newData.clouds = data.clouds.all;
    newData.rain = (data.rain && data.rain["1h"]) || 0;

    window.localStorage.setItem("lastLocation", newData.location);
    setWeatherData(newData);
  };

  useEffect(() => {
    setLoading(true);
    getWeatherData(window.localStorage.getItem("lastLocation") || "bangalore");
  }, []);

  return (
    <div className={`${style.mainDiv} ${style[weatherData.main || "default"]}`}>
      <div className={style.contentDiv}>
        <div className={style.header}>
          <p className={style.cityName}>{weatherData.location}</p>
          <Searchbar
            placeholder={"Enter location..."}
            onSearch={onSearch}
            errorMsg={errorMsg}
          />
        </div>
        {!loading && weatherData.main && (
          <div className={style.info}>
            <TemperatureInfo weatherData={weatherData} />
            <MiscInfo weatherData={weatherData} />
          </div>
        )}
        {loading && (
          <p className={style.loading}>
            Loading
            <span className={style.ellipsisAnim}>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Weather;
