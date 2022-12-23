import React from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import {NavLink} from "react-router-dom";

const Profile = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.manga}>
        <NavLink
          className={styles.link}
          to="/?name=berserk"
        >
          <p className={styles.logo}>Berserk</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
