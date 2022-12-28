import {Dispatch, HTMLProps} from "react";

export interface IModalProps extends HTMLProps<HTMLDivElement> {
  active: boolean;
  setActive: Dispatch<boolean>;
  modalData: {
    name: string;
    title: string;
    description: string;
    author: string;
    status: string;
    year: number;
    age: number;
  };
}
