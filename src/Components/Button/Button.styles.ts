import styled, { css } from "styled-components";

interface ButtonStyledProps {
  variant?: "primary" | "secondary";
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: #6e7681;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
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
      font-weight: 600;
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: #4caf50;
      font-weight: 600;
    `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
  margin: 50px;
  width: 90%;
`;
