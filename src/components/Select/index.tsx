import React from "react";
import * as S from "./styles";

interface Option {
  label: string;
  value: string;
}
export interface SelectProps {
  value: string;
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
  options: Array<Option>;
}

const Select = ({
  value = "",
  label,
  placeholder,
  onChange,
  options,
}: SelectProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <S.SelectWrapper>
      <S.Label>{label}</S.Label>
      <S.Select
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      >
        {options.map((option: Option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </S.Select>
    </S.SelectWrapper>
  );
};

export default Select;
