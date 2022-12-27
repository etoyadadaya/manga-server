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
                <p className={styles.descriptionTitle}>{modalData?.title}</p>
                <p className={styles.description}>{modalData?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
