import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import Button from "../button/button";

interface IHeader extends HTMLProps<HTMLElement> {
  toggleMenu?: Dispatch<boolean>;
  toggleSettings?: Dispatch<boolean>;
  episodeNumber?: number;
  setEpisode?: Dispatch<number>;
  totalEpisodes?: number;
  mangaName: string;
}

const Header: FC<IHeader> = ({
  toggleMenu,
  toggleSettings,
  episodeNumber,
  setEpisode,
  totalEpisodes,
  mangaName
}) => {
  const prevEpisode = episodeNumber - 1;
  const nextEpisode = episodeNumber + 1;

  return (
    <div className={styles.header}>
      <div className={styles.chapterSelector}>
        <div className={styles.mangaNameWrap}>
          <p className={styles.readingNow}>Сейчас читаете:</p>
          <p className={styles.mangaName}>{mangaName.charAt(0).toUpperCase() + mangaName.slice(1)}</p>
        </div>
        <div className={styles.episodeSelector}>
          <button
            className={styles.episodeBtn}
            onClick={() => {
              prevEpisode >= 0 ? setEpisode(prevEpisode) : "";
            }}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Button
            onClick={() => toggleMenu(true)}
            className={styles.listBtn}
            variant={"primary"}
          >
            <p className={styles.episodeList}>Список эпизодов</p>
            <p className={styles.episodeNumber}>Эпизод: {episodeNumber}</p>
          </Button>
          <button
            className={styles.episodeBtn}
            onClick={() => {
              nextEpisode < totalEpisodes ? setEpisode(nextEpisode) : "";
            }}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Button
        onClick={() => toggleSettings(true)}
        className={styles.listBtn}
        variant={"primary"}
      >
        <div className={styles.settingsWrap}>
          <p>Настройки</p>
        </div>
      </Button>
    </div>
  );
};

export default Header;
