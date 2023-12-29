import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../../types";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import {
  CategoryBox,
  CategoryTitle,
  Container,
  DeleteButton,
  FormContainer,
  GridContainer,
  Hr,
  TaskContainer,
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
          <Button type="button" onClick={openModal} variant="primary">
            Create a ToDo
          </Button>
        )}
      </FormContainer>
      <GridContainer>
        {categories &&
          categories.map(({ id, title, tasks }) => (
            <TaskContainer key={id}>
              <div>
                <CategoryBox>
                  <CategoryTitle>Category: {title}</CategoryTitle>
                  <DeleteButton onClick={deleteCategory} value={id}>
                    X
                  </DeleteButton>
                </CategoryBox>
                <Hr />
                {tasks.map((taskItem) => (
                  <div key={taskItem.id}>
                    <p>TaskTitle: {taskItem.title}</p>
                    <p>Description: {taskItem.description}</p>
                    <DeleteButton onClick={deleteTask} value={taskItem.id}>
                      X
                    </DeleteButton>
                    <hr />
                  </div>
                ))}
              </div>
            </TaskContainer>
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
