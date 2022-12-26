import React, {Dispatch, FC, HTMLProps} from "react";

import styles from "./styles.scss";
import clsx from "clsx";

interface IModalProps extends HTMLProps<HTMLDivElement> {
  active: boolean;
  setActive: Dispatch<boolean>;
  title: string;
}

const Modal: FC<IModalProps> = ({
  active,
  setActive,
  children,
  className,
  title,
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
                <p className={styles.title}>{title}</p>
              </div>
              <div className={styles.modalRight}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
