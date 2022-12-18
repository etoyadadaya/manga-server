import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import clsx from "clsx";

interface IMenu extends HTMLProps<HTMLDivElement> {
  episodes: number;
  setEpisode: Dispatch<number>;
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<boolean>;
}

const Menu: FC<IMenu> = ({
  episodes,
  setEpisode,
  isMenuActive,
  setIsMenuActive,
}) => {
  const getEpisodesNumber = episode => {
    const content = [];
    for (let i = 1; i <= episode; i++) {
      content.push(
        <button
          onClick={() => setEpisode(i)}
          className={styles.episodeBtn}
          key={i}
        >
          {i}
        </button>
      );
    }
    return content;
  };

  return (
    <>
      <div
        onClick={() => setIsMenuActive(false)}
        className={clsx([styles.wrap], {
          [styles.active]: isMenuActive,
        })}
      />
      <div
        className={clsx([styles.container], {
          [styles.active]: isMenuActive,
        })}
      >
        <div className={styles.content}>
          Эпизод:
          {getEpisodesNumber(episodes)}
        </div>
      </div>
    </>
  );
};

export default Menu;
