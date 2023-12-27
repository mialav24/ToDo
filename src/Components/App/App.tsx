import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import {
  CategoryTitle,
  Container,
  FormContainer,
  GridContainer,
  Hr,
  TaskContainer,
} from "./App.styles";

type Category = {
  id: string;
  title: string;
  tasks: Task[];
};

type Task = {
  id: string;
  title: string;
  description: string;
};

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
      if (category.title === selectedCategoryId) {
        return {
          ...category,
          tasks: [
            ...category.tasks,
            {
              id: selectedCategoryId,
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
                <CategoryTitle>Category: {title}</CategoryTitle>
                <Hr />
                {tasks.map((taskItem) => (
                  <div key={taskItem.id}>
                    <p>TaskTitle: {taskItem.title}</p>
                    <p>Description: {taskItem.description}</p>
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
