import styled from "styled-components";

export const TableData = styled.td`
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.lg}`};
  border: 1px solid ${(props) => props.theme.palette.borderColor};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${(props) => props.theme.palette.tableBg};
  font-size: 16px;
`;

export const TableHeading = styled.th`
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.lg}`};
  border: 1px solid ${(props) => props.theme.palette.borderColor};
  font-weight: 600;
  background-color: ${(props) => props.theme.palette.tableHeadingBg};
  color: ${(props) => props.theme.palette.text.primary};
  text-align: left;
  svg {
    vertical-align: middle;
    margin-left: ${(props) => props.theme.spacing.md};
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;
