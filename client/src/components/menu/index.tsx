import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";
import clsx from "clsx";

interface IMenu extends HTMLProps<HTMLDivElement> {
  episodes?: number;
  setEpisode?: Dispatch<number>;
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<boolean>;
  isSettings: boolean;
  setIsVertical?: Dispatch<boolean>;
  isVertical?: boolean;
}

const Menu: FC<IMenu> = ({
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
                <label className={styles.switch}>
                  <input
                    onClick={() => setIsVertical(true)}
                    defaultChecked={true}
                    type={isVertical ? "checkbox" : "none"}
                  />
                  <span className={styles.slider}>Вертикальный</span>
                </label>
                <label className={styles.switch}>
                  <input
                    onClick={() => setIsVertical(false)}
                    type={!isVertical ? "checkbox" : "none"}
                  />
                  <span className={styles.slider}>Горизонтальный</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Menu;
