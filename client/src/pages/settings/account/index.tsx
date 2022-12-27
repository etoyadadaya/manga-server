import React from "react";
import styles from "./styles.scss";
import {Button, Input, NavLink} from "../../../components";

const Account = () => {
  return (
    <div>
      <div>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Аккаунт</h1>
          <NavLink to="/profile">Вернуться в профиль</NavLink>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Изменить никнейм:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите новый никнейм"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить</Button>
          </div>
          <h2 className={styles.title}>Изменить пароль:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите новый пароль"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить</Button>
          </div>
          <h2 className={styles.title}>Изменить почту:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите новую почту"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить</Button>
          </div>
          <h2 className={styles.title}>Изменить номер телефона:</h2>
          <div className={styles.inputWrap}>
            <Input
              placeholder={"Введите новый номер телефона"}
              variant={"settings"}
            />
            <Button variant={"header"}>Изменить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
