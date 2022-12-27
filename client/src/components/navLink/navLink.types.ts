import {HTMLProps} from "react";

export interface INavLink extends HTMLProps<HTMLElement> {
  to: string;
}
