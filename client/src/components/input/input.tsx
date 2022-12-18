import React, {FC, HTMLProps} from "react";
import {UseFormRegisterReturn} from "react-hook-form";
import styles from "./styles.scss";

interface Input extends HTMLProps<HTMLInputElement> {
  placeholder?: string;
  register: UseFormRegisterReturn;
  variant?: "primary";
}

const Input: FC<Input> = ({placeholder, register}) => (
  <input
    className={styles.primary}
    placeholder={placeholder}
    {...register}
  ></input>
);

export default Input;
