import React from "react";
import styles from "./styles.scss";
import {Header} from "../../components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.content}>
        <h1 className={styles.pageName}>Главная</h1>
      </div>
    </div>
  );
};

export default Home;
