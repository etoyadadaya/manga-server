import React, {FC, HTMLProps} from "react";
import {UseFormRegisterReturn} from "react-hook-form";
import clsx from "clsx";
import styles from "./styles.scss";

interface Input extends HTMLProps<HTMLInputElement> {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  variant?: "primary" | "settings";
}

const Input: FC<Input> = ({placeholder, register, variant}) => (
  <input
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.settings]: variant === "settings",
    })}
    placeholder={placeholder}
    {...register}
  ></input>
);

export default Input;
