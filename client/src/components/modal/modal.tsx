import React, {FC} from "react";
import styles from "./modal.module.scss";
import clsx from "clsx";
import {IModalProps} from "./modal.types";

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
                <p className={styles.title}>{modalData?.title}</p>
              </div>
              <div className={styles.modalRight}>{modalData?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
