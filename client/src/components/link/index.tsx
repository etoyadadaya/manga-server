import React, {FC, HTMLProps} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../button/button";

interface ILinkProps extends HTMLProps<HTMLElement> {
  to: string;
}

const Link: FC<ILinkProps> = ({className, to, children}) => {
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

export default Link;
