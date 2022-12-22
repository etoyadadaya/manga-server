import React, {Dispatch, FC, HTMLProps} from "react";
import styles from "./styles.scss";

interface IRadio extends HTMLProps<HTMLInputElement> {
  checked: boolean;
  setIsChecked: Dispatch<boolean>;
  disabled?: boolean;
  firstTitle: string;
  secondTitle: string;
}

const Radio: FC<IRadio> = ({
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

export default Radio;
