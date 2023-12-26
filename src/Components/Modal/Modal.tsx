import { ChangeEvent, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import {
  ButtonContainer,
  FormContainer,
  ModalContainer,
  ModalOverlay,
  TextArea,
} from "./Modal.styles";

type Category = {
  id: string;
  title: string;
};

type ModalProps = {
  closeModal?: () => void;
  categories: Category[] | [];
  onTaskTitleChange: (title: string) => void;
};

const Modal = ({ closeModal, categories, onTaskTitleChange }: ModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTaskTitle(title);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTaskTitleChange(taskTitle);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <Input
          placeholder="Type your task's title..."
          value={taskTitle}
          onChange={handleInputChange}
        />
        <TextArea placeholder="Type your task..." name="" id="" />
        <FormContainer onSubmit={handleSubmit}>
          <select>
            <option>-- Select a category --</option>
            {categories.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
          <ButtonContainer>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
            <Button type="button" variant="primary" onClick={closeModal}>
              Close
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
