import InfoCard from "../molecules/InfoCard";
import style from "./MiscInfo.module.scss";
const MiscInfo = () => {
  return (
    <div className={style.cardGroup}>
      <div className={style.cardGroup}>
        <InfoCard />
        <InfoCard />
      </div>
      <div className={style.cardGroup}>
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default MiscInfo;
