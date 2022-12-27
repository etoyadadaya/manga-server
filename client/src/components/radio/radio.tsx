import React, {FC} from "react";
import styles from "./radio.module.scss";
import {IRadio} from "./radio.types";

export const Radio: FC<IRadio> = ({
  checked,
  setIsChecked,
  disabled = false,
  firstTitle,
  secondTitle,
}) => {
  return (
    <>
      <label className={styles.switch}>
        <input
          value={""}
          checked={!checked}
          disabled={disabled}
          onClick={() => setIsChecked(false)}
          type={!checked ? "checkbox" : "none"}
        />
        <span className={styles.slider}>{firstTitle}</span>
      </label>
      <label className={styles.switch}>
        <input
          value={""}
          checked={checked}
          disabled={disabled}
          onClick={() => setIsChecked(true)}
          type={checked ? "checkbox" : "none"}
        />
        <span className={styles.slider}>{secondTitle}</span>
      </label>
    </>
  );
};
