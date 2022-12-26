import React, {FC, HTMLProps} from "react";
import styles from "./styles.scss";
import {NavLink} from "../navLink";

interface ICard extends HTMLProps<HTMLElement> {
  name: string;
  title: string;
  description?: string;
}

const Card: FC<ICard> = ({name, description, title, onClick, children}) => {
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
          // to={`/?name=${name}`}
          className={styles.title}
        >
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
