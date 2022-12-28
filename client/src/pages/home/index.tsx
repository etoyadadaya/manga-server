import React from "react";
import styles from "./styles.scss";
import {Header} from "../../components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.content}></div>
    </div>
  );
};

export default Home;
