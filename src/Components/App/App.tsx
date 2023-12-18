import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import { GridContainer } from "../Button/Button.styles";
import Input from "../Input";
import Modal from "../Modal";
import { Container, FormContainer } from "./App.styles";

type Data = {
  categories: { id: string; title: string }[] | [];
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
    setCategoryTitle(e.target.value);
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

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={categoryTitle}
          placeholder="Type your category..."
        />
        {
          <Button
            type="submit"
            disabled={categoryTitle.length >= 3 ? false : true}
          >
            Create a category
          </Button>
        }
        {categories.categories.length >= 1 && (
          <Button type="button" onClick={openModal} variant="primary">
            Create a ToDo
          </Button>
        )}
      </FormContainer>
      <GridContainer>
        {categories.categories &&
          categories.categories.map(({ id, title }) => (
            <div key={id}>{title}</div>
          ))}
      </GridContainer>
      {isModalOpen && (
        <Modal categories={categories.categories} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default App;
