import { useState } from "react";
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
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextArea
            placeholder="Type your task..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
