import styled from "styled-components";

export const Button = styled.button<{ variant: string }>`
  width: 120px;
  height: 36px;
  background: ${(props) =>
    props.variant === "primary"
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.palette.text.primary
      : props.theme.palette.text.secondary};
  border: 1px solid
    ${(props) =>
      props.variant === "primary"
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.variant === "primary"
        ? props.theme.palette.primary.dark
        : props.theme.palette.secondary.dark};
  }
`;
