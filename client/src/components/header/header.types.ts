import {Dispatch, HTMLProps} from "react";

export interface IHeader extends HTMLProps<HTMLElement> {
  toggleMenu?: Dispatch<boolean>;
  toggleSettings?: Dispatch<boolean>;
  setEpisode?: Dispatch<number>;
  totalEpisodes?: number;
  episodeNumber?: number;
  mangaName?: string;
  type: "main" | "home";
}
