import {Dispatch, HTMLProps} from "react";
import {manga} from "../../types";

export interface IModalProps extends HTMLProps<HTMLDivElement> {
  fetchFavorites: () => void;
  favorites: manga[];
  active: boolean;
  setActive: Dispatch<boolean>;
  modalData: {
    id: number;
    name: string;
    title: string;
    description: string;
    author: string;
    status: string;
    year: number;
    age: number;
  };
}
