import React from "react";
import styles from "./styles.scss";
import {NavLink} from "../../../components/navLink";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";

const Public = () => {
  return (
    <div>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Ваш профиль</h1>
        <NavLink to="/">Go back</NavLink>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>Аватар:</h2>
          <div className={styles.avatar}></div>
          <Button variant={"header"}>Изменить аватар</Button>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Имя:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите отображаемое имя"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить имя</Button>
          </div>
          <h2 className={styles.title}>Почта:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите отображаемую почту"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить почту</Button>
          </div>
          <h2 className={styles.title}>Номер телефона:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите отображаемый номер телефона"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить номер</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
