import {HTMLProps} from "react";

export interface ICarouselProps extends HTMLProps<HTMLElement> {
  variant: "vertical" | "horizontal";
}
