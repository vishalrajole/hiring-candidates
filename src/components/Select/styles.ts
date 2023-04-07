import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Select = styled.select`
  height: 40px;
  width: 60%;
`;

export const Label = styled.label`
  margin-right: ${(props) => props.theme.spacing.lg};
`;
