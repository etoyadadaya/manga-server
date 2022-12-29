import React from "react";
import styles from "./styles.scss";
import {Header} from "../../components";
import Slider from "../../components/slider/slider";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.content}>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
