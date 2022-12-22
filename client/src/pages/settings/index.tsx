import React from "react";
import styles from "./styles.scss";
import {Outlet} from "react-router-dom";
import {NavLink} from "../../components/navLink";

const Settings = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.menuWrap}>
            <ul className={styles.menu}>
              <NavLink
                to="/settings/public"
                className={styles.menuItem}
              >
                Профиль
              </NavLink>
              <NavLink
                to="/settings/account"
                className={styles.menuItem}
              >
                Аккаунт
              </NavLink>
              <NavLink
                to="/settings/appearance"
                className={styles.menuItem}
              >
                Внешний вид
              </NavLink>
              <NavLink
                to="/settings/notifications"
                className={styles.menuItem}
              >
                Уведомления
              </NavLink>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
