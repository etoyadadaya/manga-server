import React, {FC} from "react";
import styles from "./modal.module.scss";
import clsx from "clsx";
import {IModalProps} from "./modal.types";
import {NavLink} from "react-router-dom";
import {Button} from "../button/button";

export const Modal: FC<IModalProps> = ({
  active,
  setActive,
  className,
  modalData,
}) => {
  const handleClick = () => {
    document.body.style.overflow = "auto";
    setActive(false);
  };

  return (
    <>
      <div
        className={clsx([styles.modal], {
          [styles.active]: active,
        })}
        onClick={handleClick}
      >
        <div
          className={clsx([className], [styles.modalContent], {
            [styles.active]: active,
          })}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalWrap}>
              <div className={styles.modalLeft}>
                <div className={styles.buttonsWrap}>
                  <img
                    className={styles.img}
                    src={`http://127.0.0.1:666/covers/${modalData?.name}/${modalData?.name}.webp`}
                    alt=""
                  />
                  <NavLink
                    className={styles.read}
                    to={`/?name=${modalData?.name}`}
                  >
                    Читать
                  </NavLink>
                  <Button className={styles.read}>Отслеживать</Button>
                  <Button className={styles.read}>Добавить в закладки</Button>
                </div>
              </div>
              <div className={styles.modalRight}>
                <div className={styles.descriptionWrap}>
                  <p className={styles.descriptionTitle}>{modalData?.title}</p>
                  <p className={styles.description}>{modalData?.description}</p>
                </div>
                <div className={styles.aboutWrap}>
                  <div className={styles.about}>
                    <p
                      className={styles.aboutTitle}
                    >{`Год выхода: ${modalData?.year}`}</p>
                    <p
                      className={styles.aboutTitle}
                    >{`Статус: ${modalData?.status}`}</p>
                    <p
                      className={styles.aboutTitle}
                    >{`Автор: ${modalData?.author}`}</p>
                    <p className={styles.aboutTitle}>
                      {`Возрастной рейтинг: ${modalData?.age}+`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
