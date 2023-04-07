import styled from "styled-components";

export const Bullet = styled.div<{ status: string }>`
  display: inline-flex;
  border-radius: 5px;
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  font-size: 14px;
  color: #fff;
  line-height: 1;
  background: ${({ status, theme }) => {
    switch (status) {
      case "new":
        return theme.palette.primary.main;
      case "done":
        return theme.palette.success.main;
      case "processing":
        return theme.palette.warning.main;
      case "error":
        return theme.palette.error.main;
      default:
        return theme.palette.secondary.main;
    }
  }};
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.grey[100]};
  color: ${(props) => props.theme.palette.grey[200]};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: ${(props) => props.theme.spacing.md};
`;

export const Wrapper = styled.div`
  width: 60%;
  margin: ${(props) => props.theme.spacing.xl} auto;
`;

export const Message = styled.div<{ type?: string }>`
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.type === "error"
      ? props.theme.palette.error.main
      : props.theme.palette.text.secondary};
  margin: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg};
`;
