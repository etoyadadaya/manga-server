import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ILinkProps} from "./link.types";
import {Button} from "../button/button";

export const Link: FC<ILinkProps> = ({className, to, children}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return (
    <Button
      onClick={handleClick}
      className={className}
    >
      {children}
    </Button>
  );
};
