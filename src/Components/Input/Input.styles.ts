import styled from "styled-components";

export const InputStyled = styled.input`
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 16px;
  height: 22px;
  outline: none;
  padding: 10px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border: 1px solid #ccc;
  }
  &::placeholder {
    font-size: 12px;
    color: black;
    font-weight: 600;
  }
`;
