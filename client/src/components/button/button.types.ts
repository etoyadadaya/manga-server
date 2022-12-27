import {HTMLProps} from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "switch" | "close" | "auth" | "header" | "login";
}
