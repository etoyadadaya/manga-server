import React, {FC} from "react";
import {NavLink as Ref} from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.scss";
import {HTMLProps} from "react";

export interface INavLink extends HTMLProps<HTMLElement> {
  to: string;
}

export const NavLink: FC<INavLink> = ({
  to,
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <Ref
      to={to}
      style={style}
      onClick={onClick}
      className={({isActive}) =>
        clsx([className, styles.link], {
          [styles.active]: isActive,
        })
      }
    >
      {children}
    </Ref>
  );
};
