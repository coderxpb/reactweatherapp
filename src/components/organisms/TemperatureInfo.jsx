import style from "./TemperatureInfo.module.scss";

const TemperatureInfo = ({ icon }) => {
  return (
    <div className={style.tempInfo}>
      <img className={style.weatherIcon} src={icon} />
      <p className={style.weatherDesc}>Clear</p>
      <p className={style.weatherTemp}>23.23 C</p>
      <p className={style.weatherTempReal}>Feels like 25</p>
    </div>
  );
};

export default TemperatureInfo;
