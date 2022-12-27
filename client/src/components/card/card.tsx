import React, {FC} from "react";
import styles from "./card.module.scss";
import {ICard} from "./card.types";

export const Card: FC<ICard> = ({name, title, onClick, children}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          onClick={onClick}
          className={styles.img}
          src={`http://127.0.0.1:666/covers/${name}/${name}.webp`}
          alt=""
        />
        <p
          onClick={onClick}
          className={styles.title}
        >
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};
