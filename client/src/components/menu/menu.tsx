import React, {FC} from "react";
import styles from "./menu.module.scss";
import clsx from "clsx";
import {IMenu} from "./menu.types";
import {Radio} from "../radio/radio";

export const Menu: FC<IMenu> = ({
  episodes,
  setEpisode,
  isMenuActive,
  setIsMenuActive,
  isSettings,
  setIsVertical,
  isVertical,
}) => {
  if (!isSettings) {
    const getEpisodesNumber = episode => {
      const content = [];
      for (let i = 0; i < episode; i++) {
        content.push(
          <button
            onClick={() => setEpisode(i)}
            className={styles.episodeBtn}
            key={i}
          >
            {`${i}`}
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
            <p className={styles.episodeTitle}>Выберите эпизод: </p>
            {getEpisodesNumber(episodes)}
          </div>
        </div>
      </>
    );
  }

  if (isSettings) {
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
            <div className={styles.positionButtonsWrap}>
              <p className={styles.positionTitle}>Режим чтения:</p>
              <div className={styles.positionButtons}>
                <Radio
                  checked={isVertical}
                  setIsChecked={setIsVertical}
                  firstTitle="Горизонтальный"
                  secondTitle="Вертикальный"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
