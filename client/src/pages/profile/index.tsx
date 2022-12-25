import React from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import {NavLink} from "react-router-dom";
import Car from "../../components/carousel";
import {useManga} from "../../hooks/useManga/useManga";

const Profile = () => {
  console.log(useManga("berserk"));
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

        {/*<Car>*/}
        {/*  {covers().map((link, key) => (*/}
        {/*    <img*/}
        {/*      className={styles.img}*/}
        {/*      src={link}*/}
        {/*      alt=""*/}
        {/*      key={key}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Car>*/}
      </div>
    </div>
  );
};

export default Profile;
