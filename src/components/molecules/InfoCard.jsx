import style from "./InfoCard.module.scss";
import Humidity from "../../assets/icons/humidity.svg";
const InfoCard = () => {
  return (
    <div className={style.card}>
      <img className={style.cardIcon} src={Humidity} />
      <div className={style.cardText}>
        <p className={style.cardName}>Humidity</p>
        <p className={style.cardValue}>32dd</p>
      </div>
    </div>
  );
};

export default InfoCard;
