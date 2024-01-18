import style from "./InfoCard.module.scss";
const InfoCard = ({ icon, title, value }) => {
  return (
    <div className={style.card}>
      <img className={style.cardIcon} src={icon} />
      <div className={style.cardText}>
        <p className={style.cardName}>{title}</p>
        <p className={style.cardValue}>{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
