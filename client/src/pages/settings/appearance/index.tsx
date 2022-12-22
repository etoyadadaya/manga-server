import React, {useState} from "react";
import styles from "./styles.scss";
import {NavLink} from "../../../components/navLink";

const Appearance = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div>
      <div>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Внешний вид</h1>
          <NavLink to="/profile">Вернуться в профиль</NavLink>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Выберите цветовую схему:</h2>
          <div className={styles.positionButtons}>
            <label className={styles.switch}>
              <input
                checked={!theme}
                onClick={() => setTheme(false)}
                type={!theme ? "checkbox" : "none"}
              />
              <span className={styles.slider}>Светлая тема</span>
            </label>
            <label className={styles.switch}>
              <input
                checked={theme}
                onClick={() => setTheme(true)}
                type={theme ? "checkbox" : "none"}
              />
              <span className={styles.slider}>Темная тема</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
