import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../../types";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import {
  CardContainer,
  CategoryContainer,
  CategoryTitle,
  Container,
  DeleteCategoryButton,
  DeleteTaskButton,
  Description,
  DescriptionContainer,
  EditButton,
  FormContainer,
  GridContainer,
  ImageTitle,
  InfoTask,
  Svg,
  TaskTitle,
  TitleContainer,
} from "./App.styles";

const App = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(e.target.value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleExists = categories.some(
      (category) => category.title === categoryTitle
    );
    if (titleExists) {
      alert("Category already exists");
    } else {
      setCategories((prevCategories) => [
        ...prevCategories,
        { id: `category-${uuidv4()}`, title: categoryTitle, tasks: [] },
      ]);
      setCategoryTitle("");
    }
  };
  const addTaskToCategory = (
    taskTitle: string,
    description: string,
    selectedCategoryId: string
  ) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategoryId) {
        return {
          ...category,
          tasks: [
            ...category.tasks,
            {
              id: `task-${uuidv4()}`,
              title: taskTitle,
              description: description,
            },
          ],
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const deleteCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryId = e.currentTarget.value;
    const filterCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(filterCategories);
  };

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const taskId = e.currentTarget.value;
    const updatedCategories = categories.map((category) => {
      const updatedTasks = category.tasks.filter((task) => task.id !== taskId);
      return {
        ...category,
        tasks: updatedTasks,
      };
    });
    setCategories(updatedCategories);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={categoryTitle}
          placeholder="Type your category..."
        />
        {
          <Button type="submit" disabled={!(categoryTitle.length >= 3)}>
            Create a category
          </Button>
        }
        {categories.length > 0 && (
          <Button type="button" onClick={openModal} variant="secondary">
            Create a ToDo
          </Button>
        )}
      </FormContainer>
      <GridContainer>
        {categories &&
          categories.map(({ id, title, tasks }) => (
            <CardContainer key={id}>
              <CategoryContainer>
                <TitleContainer>
                  <ImageTitle src="src\img\pin-titular.png" alt="ping-img" />
                  <CategoryTitle>{title}</CategoryTitle>
                </TitleContainer>
                <DeleteCategoryButton onClick={deleteCategory} value={id}>
                  X
                </DeleteCategoryButton>
              </CategoryContainer>
              {tasks.map((taskItem) => (
                <DescriptionContainer key={taskItem.id}>
                  <TaskTitle>{taskItem.title}</TaskTitle>
                  <DeleteTaskButton onClick={deleteTask} value={taskItem.id}>
                    X
                  </DeleteTaskButton>
                  <InfoTask>
                    <Description>{taskItem.description}</Description>
                    <EditButton>
                      Edit
                      <Svg viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                      </Svg>
                    </EditButton>
                  </InfoTask>
                </DescriptionContainer>
              ))}
            </CardContainer>
          ))}
      </GridContainer>
      {isModalOpen && (
        <Modal
          categories={categories}
          closeModal={closeModal}
          addTaskToCategory={addTaskToCategory}
        />
      )}
    </Container>
  );
};

export default App;
