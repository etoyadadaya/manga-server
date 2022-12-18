import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import button from "../button/button";

interface IHeader extends HTMLProps<HTMLElement> {
  toggleMenu: Dispatch<boolean>;
}

const Header: FC<IHeader> = ({toggleMenu}) => {
  return (
    <div className={styles.header}>
      <div className={styles.chapterSelector}>
        <button
          onClick={() => toggleMenu(true)}
          className={styles.listBtn}
        >
          Список эпизодов
        </button>
        <div className={styles.episodeSelector}>
          <button
            onClick={() => {}}
            className={styles.episodeBtn}
          >
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p className={styles.episodeNumber}>Номер эпизода: </p>
          <button
            onClick={() => {}}
            className={styles.episodeBtn}
          >
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
