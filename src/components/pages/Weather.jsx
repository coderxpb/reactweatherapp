import Searchbar from "../atoms/Searchbar";
import style from "./Weather.module.scss";

const Weather = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <p className={style.cityName}>Bangalore</p>
        <Searchbar placeholder={"enter location..."} />
      </div>
    </div>
  );
};

export default Weather;
