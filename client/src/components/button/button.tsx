import React, {FC, HTMLProps} from "react";
import styles from "./styles.scss";
import clsx from "clsx";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "switch" | "close" | "auth";
}

const Button: FC<Button> = ({children, variant, onClick}) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.switch]: variant === "switch",
      [styles.close]: variant === "close",
      [styles.auth]: variant === "auth",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
