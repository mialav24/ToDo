import styled from "styled-components";

export const ModalOverlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 500px;
  padding: 30px;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid white;
  font-size: 16px;
  height: 150px;
  outline: none;
  padding: 10px;
  transition: border-color 0.3s ease-in;
  resize: none;

  &:focus {
    border-color: #fff;
    border: 1px solid #ccc;
  }

  &::placeholder {
    font-size: 12px;
    color: black;
    font-weight: 600;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
