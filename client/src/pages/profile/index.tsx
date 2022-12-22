import React from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import {NavLink} from "react-router-dom";
import Berserk from "../../../../server/static/berserk.png";
import Cowboy from "../../../../server/static/cowboy.png";
import Vagabond from "../../../../server/static/vagabond.png";
import Vinland from "../../../../server/static/vinland.png";
import TWD from "../../../../server/static/twd.png";
import Chainsaw from "../../../../server/static/chainsaw.png";

const Profile = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.manga}>
        <NavLink
          className={styles.link}
          to="/?name=berserk"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={Berserk}
              alt=""
            />
            <p className={styles.logo}>Berserk</p>
          </div>
        </NavLink>
        <NavLink
          className={styles.link}
          to="/?name=The Walking Dead"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={TWD}
              alt=""
            />
            <p className={styles.logo}>The Walking Dead</p>
          </div>
        </NavLink>
        <NavLink
          className={styles.link}
          to="/?name=Cowboy Bebop"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={Cowboy}
              alt=""
            />
            <p className={styles.logo}>Cowboy Bebop</p>
          </div>
        </NavLink>
        <NavLink
          className={styles.link}
          to="/?name=Vagabond"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={Vagabond}
              alt=""
            />
            <p className={styles.logo}>Vagabond</p>
          </div>
        </NavLink>
        <NavLink
          className={styles.link}
          to="/?name=Vinland Saga"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={Vinland}
              alt=""
            />
            <p className={styles.logo}>Vinland Saga</p>
          </div>
        </NavLink>
        <NavLink
          className={styles.link}
          to="/?name=Chainsaw Man"
        >
          <div className={styles.img}>
            <img
              className={styles.poster}
              src={Chainsaw}
              alt=""
            />
            <p className={styles.logo}>Chainsaw Man</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
