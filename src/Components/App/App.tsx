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

type Data = {
  categories: { id: string; title: string }[];
};

const App = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categories, setCategories] = useState<Data>({
    categories: [],
  });

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
    const titleExists = categories.categories.some(
      (category) => category.title === categoryTitle
    );
    if (titleExists) {
      alert("Category already exists");
    } else {
      setCategories((prev) => ({
        categories: [
          ...prev.categories,
          { id: uuidv4(), title: categoryTitle },
        ],
      }));
      setCategoryTitle("");
    }
  };

  const handleTaskTitleChange = (taskTitle: string) => {
    console.log(taskTitle);
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
        {categories.categories.length > 0 && (
          <Button type="button" onClick={openModal} variant="primary">
            Create a ToDo
          </Button>
        )}
      </FormContainer>
      <GridContainer>
        {categories.categories &&
          categories.categories.map(({ id, title }) => (
            <TaskContainer key={id}>
              <div>
                <CategoryTitle>Category: {title}</CategoryTitle>
                <Hr />
                <p>TaskTitle</p>
              </div>
              <p>
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Neque, maxime quae itaque quos numquam id perferendis
                pariatur alias voluptatem soluta velit sunt ducimus repellendus
                voluptatum blanditiis. Dolorem nam provident eos.
              </p>
            </TaskContainer>
          ))}
      </GridContainer>
      {isModalOpen && (
        <Modal
          categories={categories.categories}
          closeModal={closeModal}
          onTaskTitleChange={handleTaskTitleChange}
        />
      )}
    </Container>
  );
};

export default App;
