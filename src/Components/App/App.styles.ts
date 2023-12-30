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
  width: 90%;
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  overflow: hidden;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid #b0b0b0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageTitle = styled.img`
  height: 20px;
`;

export const CategoryTitle = styled.h2`
  margin: 0;
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
  outline: none;
  border: none;
  color: #9775fa;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  font-size: 12px;
  height: 25px;
  justify-content: center;
  padding: 10px;
  transition: 0.2s ease;

  &:hover {
    background-color: #9775fa;
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
  color: #9368ff;
  text-decoration: underline;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const DeleteTaskButton = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  outline: none;
  border: none;
  color: #9368ff;
  cursor: pointer;
  display: flex;
  font-size: 10px;
  font-weight: 600;
  height: 22px;
  justify-content: center;
  padding: 7px;
  position: absolute;
  right: 18px;
  top: 5px;
  transition: 0.4s ease;

  &:hover {
    background-color: #9368ff;
    color: #fff;
  }
`;

export const InfoTask = styled.div`
  max-height: 150px;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Description = styled.p`
  padding: 5px 0;
  padding-right: 10px;
  font-size: 14px;
  text-align: justify;
  margin: 0px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Svg = styled.svg`
  width: 12px;
  position: absolute;
  bottom: 4px;
  fill: white;
  top: 3px;
  transition: top 0.5s ease;
`;
export const EditButton = styled.button`
  position: relative;
  display: flex;
  font-size: 11px;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 30px;
  width: 30px;
  border: none;
  background-color: #9368ff;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 7px;
  align-self: center;

  &:hover {
    color: transparent;
  }

  &:hover ${Svg} {
    top: 30%;
  }

  &:active {
    transition: top 0.3s ease;
    transform: translate(3px, 3px);
    box-shadow: 2px 2px 0px rgb(140, 32, 212);
  }
`;
