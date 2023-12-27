import { ChangeEvent, useState } from "react";
import { Category } from "../../types";
import Button from "../Button";
import Input from "../Input";

import {
  ActionContainer,
  ButtonsContainer,
  FormContainer,
  ModalContainer,
  ModalOverlay,
  TextArea,
} from "./Modal.styles";

type AddTaskToCategoryType = (
  taskTitle: string,
  description: string,
  selectedCategoryId: string
) => void;

type ModalProps = {
  closeModal?: () => void;
  categories: Category[] | [];
  addTaskToCategory: AddTaskToCategoryType;
};

const Modal = ({ closeModal, categories, addTaskToCategory }: ModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTaskTitle(title);
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTaskToCategory(taskTitle, description, selectedCategoryId);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            placeholder="Type your task's title..."
            value={taskTitle}
            onChange={handleInputChange}
          />
          <TextArea
            placeholder="Type your task..."
            onChange={handleTextAreaChange}
          />
          <ActionContainer>
            <select onChange={(e) => setSelectedCategoryId(e.target.value)}>
              <option>-- Select a category --</option>
              {categories.map(({ id, title }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
            <ButtonsContainer>
              <Button
                type="submit"
                variant="secondary"
                disabled={!taskTitle || !description || !selectedCategoryId}
              >
                Submit
              </Button>
              <Button type="button" variant="primary" onClick={closeModal}>
                Close
              </Button>
            </ButtonsContainer>
          </ActionContainer>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
