import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import Button from "../button/button";
import {NavLink} from "react-router-dom";

interface IHeader extends HTMLProps<HTMLElement> {
  toggleMenu?: Dispatch<boolean>;
  toggleSettings?: Dispatch<boolean>;
  setEpisode?: Dispatch<number>;
  totalEpisodes?: number;
  episodeNumber?: number;
  mangaName?: string;
  type: "main" | "home";
}

const Header: FC<IHeader> = ({
  toggleMenu,
  toggleSettings,
  episodeNumber,
  setEpisode,
  totalEpisodes,
  mangaName,
  type,
}) => {
  if (type === "main") {
    const prevEpisode = episodeNumber - 1;
    const nextEpisode = episodeNumber + 1;

    return (
      <div className={styles.header}>
        <div className={styles.chapterSelector}>
          <NavLink
            className={styles.link}
            to="/home"
          >
            <p className={styles.logoSmall}>Manga Reader</p>
          </NavLink>
          <div className={styles.mangaNameWrap}>
            <p className={styles.readingNow}>Сейчас читаете:</p>
            <p className={styles.mangaName}>
              {mangaName.charAt(0).toUpperCase() + mangaName.slice(1)}
            </p>
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
  }

  if (type === "home") {
    return (
      <div className={styles.headerHome}>
        <div className={styles.left}>
          <NavLink
            className={styles.link}
            to="/home"
          >
            <p className={styles.logo}>Manga Reader</p>
          </NavLink>
        </div>
        <div className={styles.right}>
          <NavLink to="/settings/public">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </NavLink>
          <NavLink to="">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
          </NavLink>
          <NavLink to="">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
            >
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
              <path
                fillRule="evenodd"
                d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
              ></path>
            </svg>
          </NavLink>
          <NavLink to="/profile">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
              ></path>
            </svg>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default Header;
