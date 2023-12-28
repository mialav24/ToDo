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
  console.log(categories);

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
        { id: uuidv4(), title: categoryTitle, tasks: [] },
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
              id: uuidv4(),
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

  const deleteCategory = (e) => {
    const categoryId = e.target.value;
    const filterId = categories.filter((category) => {
      return category.id !== categoryId;
    });
    setCategories(filterId);
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
                    <button>X</button>
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
