import {HTMLProps} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

export interface IInput extends HTMLProps<HTMLInputElement> {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  variant?: "primary" | "settings";
}
