import React, {FC} from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import {IButton} from "./button.types";

export const Button: FC<IButton> = ({children, variant, onClick}) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.switch]: variant === "switch",
      [styles.close]: variant === "close",
      [styles.auth]: variant === "auth",
      [styles.header]: variant === "header",
      [styles.login]: variant === "login",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
