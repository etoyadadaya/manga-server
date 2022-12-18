import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import Button from "../button/button";

interface IHeader extends HTMLProps<HTMLElement> {
  toggleMenu: Dispatch<boolean>;
}

const Header: FC<IHeader> = ({toggleMenu}) => {
  return (
    <div className={styles.header}>
      <div className={styles.chapterSelector}>
        <Button
          onClick={() => toggleMenu(true)}
          className={styles.listBtn}
        >
          Список эпизодов
        </Button>
        <div className={styles.episodeSelector}>
          <Button className={styles.episodeBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 16.7998L9.60001 11.9998L14.4 7.19981"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <p className={styles.episodeNumber}>Номер эпизода: </p>
          <Button className={styles.episodeBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59999 7.2002L14.4 12.0002L9.59999 16.8002"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
