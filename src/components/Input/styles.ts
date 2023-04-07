import styled from "styled-components";
import { SearchIcon } from "../Icons/SearchIcon";

export const SearchBarWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.theme.spacing.lg} 0 ${(props) =>
  props.theme.spacing.xl} 0;
  border: 1px solid ${(props) => props.theme.palette.borderColor}};
  border-radius:  ${(props) => props.theme.borderRadius}};
  color: ${(props) => props.theme.palette.text.secondary};
  overflow: hidden;
  align-items: center;
  input {
    height: 34px;
    background: none;
    border: none;
    padding: ${(props) =>
      `${props.theme.spacing.sm} ${props.theme.spacing.lg}`};
    outline: 0;
    font-size: 1.2rem;
  }
  ${SearchIcon} {
    padding: ${(props) => `0 ${props.theme.spacing.lg}`};
  }
`;
