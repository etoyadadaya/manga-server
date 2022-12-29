import React, {FC} from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import {IButton} from "./button.types";

export const Button: FC<IButton> = ({
  children,
  variant,
  onClick,
  className,
}) => (
  <button
    className={clsx([className], {
      [styles.primary]: variant === "primary",
      [styles.switch]: variant === "switch",
      [styles.close]: variant === "close",
      [styles.auth]: variant === "auth",
      [styles.header]: variant === "header",
      [styles.login]: variant === "login",
      [styles.profile]: variant === "profile",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
