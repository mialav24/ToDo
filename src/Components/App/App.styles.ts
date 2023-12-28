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
  grid-auto-rows: minmax(0, auto);
  padding-top: 30px;
  width: 90%;
`;

export const TaskContainer = styled.div`
  background: #e6eaf0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 380px;
`;

export const CategoryBox = styled.div`
  background-color: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: linear-gradient(#f5f5f5, #2a4d8f);
  display: flex;
  padding: 0 10px;
  position: relative;
`;

export const CategoryTitle = styled.h1`
  color: #063970;
  margin: 0 auto;
  padding: 15px 0px;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const DeleteCategoryButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  border: 2px solid #d1d5db;
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  height: 25px;
  justify-content: center;
  padding: 10px;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: 0.4s ease;

  &:hover {
    background-color: #ee0d0d;
    border: 2px solid #ee0d0d;
    color: #fff;
  }
`;

export const DescriptionContainer = styled.div`
  position: relative;
  max-height: 200px;
  padding-bottom: 5px;
`;

export const TaskTitle = styled.p`
  margin: 5px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
  color: #4a0000;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Prueba = styled.div`
  max-height: 150px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const Description = styled.p`
  padding: 5px 15px;
  font-size: 14px;
  text-align: justify;
  margin: 0px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const DeleteTaskButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  border: 2px solid #d1d5db;
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 10px;
  height: 22px;
  justify-content: center;
  padding: 7px;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: 0.4s ease;

  &:hover {
    background-color: #ee0d0d;
    border: 2px solid #ee0d0d;
    color: #fff;
  }
`;
