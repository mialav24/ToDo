import styled from "styled-components";

export const Container = styled.div`
  background-color: #30363d;
  display: flex;
  align-items: center;
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
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 50px;
  text-transform: capitalize;
  width: 90%;
`;
