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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
  margin: 50px;
  width: 90%;
`;
