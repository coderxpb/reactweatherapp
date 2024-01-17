import Searchbar from "../atoms/Searchbar";
import TemperatureInfo from "../organisms/TemperatureInfo";
import style from "./Weather.module.scss";
import DayIcon from "../../assets/animatedicons/day.svg";
import MiscInfo from "../organisms/MiscInfo";

const Weather = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <p className={style.cityName}>Bangalore</p>
        <Searchbar placeholder={"Enter location..."} />
      </div>
      <div>
        <TemperatureInfo icon={DayIcon} />
        <MiscInfo />
      </div>
    </div>
  );
};

export default Weather;
