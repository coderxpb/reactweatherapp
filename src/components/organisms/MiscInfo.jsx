import InfoCard from "../molecules/InfoCard";
import style from "./MiscInfo.module.scss";
import Humidity from "../../assets/icons/humidity.svg";
import Clouds from "../../assets/icons/cloudy.svg";
import Rainfall from "../../assets/icons/rain.svg";
import Wind from "../../assets/icons/wind.svg";
import Pressure from "../../assets/icons/pressure.svg";
import Visibility from "../../assets/icons/visibility.svg";

const MiscInfo = ({ weatherData }) => {
  return (
    <div className={style.cardGroup}>
      <div className={style.cardRow}>
        <InfoCard
          title={"Wind"}
          icon={Wind}
          value={weatherData.windspeed + " m/s"}
        />
        <InfoCard
          title={"Clouds"}
          icon={Clouds}
          value={weatherData.clouds + " %"}
        />
      </div>
      <div className={style.cardRow}>
        <InfoCard
          title={"Rain"}
          icon={Rainfall}
          value={weatherData.rain + " mm"}
        />
        <InfoCard
          title={"Humidity"}
          icon={Humidity}
          value={weatherData.humidity + " %"}
        />
      </div>
      <div className={style.cardRow}>
        <InfoCard
          title={"Pressure"}
          icon={Pressure}
          value={weatherData.pressure + " hpa"}
        />
        <InfoCard
          title={"Visibility"}
          icon={Visibility}
          value={weatherData.visibility + " km"}
        />
      </div>
    </div>
  );
};

export default MiscInfo;
