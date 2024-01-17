import Searchbar from "../atoms/Searchbar";
import TemperatureInfo from "../organisms/TemperatureInfo";
import style from "./Weather.module.scss";

const Weather = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <p className={style.cityName}>Bangalore</p>
        <Searchbar placeholder={"Enter location..."} />
      </div>
      <div>
        <TemperatureInfo />
      </div>
    </div>
  );
};

export default Weather;
