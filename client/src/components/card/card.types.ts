import {HTMLProps} from "react";

export interface ICard extends HTMLProps<HTMLElement> {
  name: string;
  title: string;
}
