import style from "./TemperatureInfo.module.scss";
import clear from "../../assets/animatedicons/day.svg";
import clouds from "../../assets/animatedicons/cloudy.svg";
import rain from "../../assets/animatedicons/rainy-7.svg";
import snow from "../../assets/animatedicons/snowy-6.svg";
import thunderstorm from "../../assets/animatedicons/thunder.svg";
import weather from "../../assets/animatedicons/cloudy-day-1.svg";
import drizzle from "../../assets/animatedicons/rainy-5.svg";

const iconMap = {
  clouds,
  clear,
  rain,
  snow,
  thunderstorm,
  weather,
  drizzle,
};

const TemperatureInfo = ({ weatherData }) => {
  return (
    <div className={style.tempInfo}>
      <img className={style.weatherIcon} src={iconMap[weatherData.main]} />
      <p className={style.weatherDesc}>{weatherData.desc}</p>
      <p className={style.weatherTemp}>{weatherData.tempC}° C</p>
      <p className={style.weatherTempReal}>
        Feels like {weatherData.feelsLike}° C
      </p>
    </div>
  );
};

export default TemperatureInfo;
