import React from "react";
import * as S from "./styles";
import { SearchIcon } from "../Icons/SearchIcon";

export interface InputProps {
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  showIcon?: boolean;
}

const Input = ({
  value = "",
  type = "text",
  placeholder,
  onChange,
  showIcon = false,
}: InputProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <S.SearchBarWrapper>
      {showIcon && <SearchIcon />}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      />
    </S.SearchBarWrapper>
  );
};

export default Input;
