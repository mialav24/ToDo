import styled, { css } from "styled-components";

interface ButtonStyledProps {
  variant?: "primary" | "secondary";
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: #9775fa;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  padding: 15px;
  transition: border-color 0.25s;
  color: #fff;
  height: 45px;

  &:hover {
    border-color: #646cff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: red;
    `}
`;
