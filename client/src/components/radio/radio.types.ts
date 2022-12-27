import {Dispatch, HTMLProps} from "react";

export interface IRadio extends HTMLProps<HTMLInputElement> {
  checked: boolean;
  setIsChecked: Dispatch<boolean>;
  disabled?: boolean;
  firstTitle: string;
  secondTitle: string;
}
