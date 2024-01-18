import style from "./TemperatureInfo.module.scss";

const TemperatureInfo = ({ icon, weatherData }) => {
  return (
    <div className={style.tempInfo}>
      <img className={style.weatherIcon} src={icon} />
      <p className={style.weatherDesc}>{weatherData.desc}</p>
      <p className={style.weatherTemp}>{weatherData.tempC}° C</p>
      <p className={style.weatherTempReal}>
        Feels like {weatherData.feelsLike}° C
      </p>
    </div>
  );
};

export default TemperatureInfo;
