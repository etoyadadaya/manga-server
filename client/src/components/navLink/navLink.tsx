import React, {FC} from "react";
import styles from "./navLink.module.scss";
import clsx from "clsx";
import {NavLink as Ref} from "react-router-dom";
import {INavLink} from "./navLink.types";

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
