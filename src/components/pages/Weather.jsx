import Searchbar from "../atoms/Searchbar";
import style from "./Weather.module.scss";

const Weather = () => {
  return (
    <div className={style.mainDiv}>
      <Searchbar />
    </div>
  );
};

export default Weather;
