import React from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import {NavLink} from "react-router-dom";

const Profile = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <h1 className={styles.pageName}>Профиль</h1>
      <NavLink
        className={styles.link}
        to="/?name=berserk"
      >
        <p className={styles.logo}>BERSERK</p>
      </NavLink>
    </div>
  );
};

export default Profile;
