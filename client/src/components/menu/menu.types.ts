import {Dispatch, HTMLProps} from "react";

export interface IMenu extends HTMLProps<HTMLDivElement> {
  episodes?: number;
  setEpisode?: Dispatch<number>;
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<boolean>;
  isSettings: boolean;
  setIsVertical?: Dispatch<boolean>;
  isVertical?: boolean;
}
