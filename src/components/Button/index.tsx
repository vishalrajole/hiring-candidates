import React from "react";
import * as S from "./styles";

export interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: string;
}

const Button = ({ onClick, label, variant = "primary" }: ButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick}>
      {label}
    </S.Button>
  );
};

export default Button;
