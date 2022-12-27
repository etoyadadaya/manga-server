import React, {FC} from "react";
import styles from "./input.module.scss";
import clsx from "clsx";
import {IInput} from "./input.types";

export const Input: FC<IInput> = ({placeholder, register, variant}) => (
  <input
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.settings]: variant === "settings",
    })}
    placeholder={placeholder}
    {...register}
  ></input>
);
