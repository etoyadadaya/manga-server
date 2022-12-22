import React from "react";
import styles from "./styles.scss";
import Header from "../../components/header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header type="home" />
      <h1 className={styles.pageName}>Главная</h1>
    </div>
  );
};

export default Home;
