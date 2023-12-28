import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #30363d;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 40px;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  max-height: 100px;
  max-width: 600px;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-top: 30px;
  text-transform: capitalize;
  width: 90%;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #e0e0e0 0%, #2b566e 100%);
  border-radius: 10px;
  border: 2px solid #313131;
  padding: 20px;
  transition: border-color 0.5s;
  max-width: 320px;
  position: relative;

  &:hover {
    border-color: #7a7adc;
  }
`;

export const Hr = styled.hr`
  border-style: dashed;
  color: #2b566e;
`;

export const CategoryTitle = styled.h1`
  margin: 0;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  background-color: red;
  border-radius: 30px;
  width: 20px;
  height: 30px;
  border: 1px solid #8f9092;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
