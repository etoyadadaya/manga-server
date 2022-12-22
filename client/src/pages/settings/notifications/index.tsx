import React, {useState} from "react";
import styles from "./styles.scss";
import {NavLink} from "../../../components/navLink";
import Radio from "../../../components/radio";

const Notifications = () => {
  const [isEnableNotifications, setIsEnableNotifications] =
    useState<boolean>(false);
  const [isEnableNewEpisodes, setIsEnableNewEpisodes] =
    useState<boolean>(false);
  const [isEnableWorks, setIsEnableWorks] = useState<boolean>(false);

  console.log(isEnableNotifications);
  console.log(isEnableNewEpisodes);
  console.log(isEnableWorks);

  return (
    <div>
      <div>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Notifications</h1>
          <NavLink to="/">Go back</NavLink>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Хотите ли вы получать уведомления?:</h2>
          <div className={styles.positionButtons}>
            <Radio
              checked={isEnableNotifications}
              setIsChecked={setIsEnableNotifications}
              firstTitle="Нет"
              secondTitle="Да"
            />
          </div>
          <h2 className={styles.title}>
            Уведомлять о добавлении новых выпусков?:
          </h2>
          <div className={styles.positionButtons}>
            <Radio
              disabled={!isEnableNotifications}
              checked={isEnableNewEpisodes}
              setIsChecked={setIsEnableNewEpisodes}
              firstTitle="Нет"
              secondTitle="Да"
            />
          </div>
          <h2 className={styles.title}>
            Уведомлять об изменениях в работе сайта?:
          </h2>
          <div className={styles.positionButtons}>
            <Radio
              disabled={!isEnableNotifications}
              checked={isEnableWorks}
              setIsChecked={setIsEnableWorks}
              firstTitle="Нет"
              secondTitle="Да"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
