import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import { GridContainer } from "../Button/Button.styles";
import Input from "../Input";
import { Container, FormContainer } from "./App.styles";

type Data = {
  categories: { id: string; title: string }[] | [];
};

const App = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categories, setCategories] = useState<Data>({
    categories: [],
  });

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
          <Button disabled={categoryTitle.length >= 3 ? false : true}>
            Create a category
          </Button>
        }
        {categories.categories.length >= 1 && (
          <Button variant="primary">Create a ToDo</Button>
        )}
      </FormContainer>
      <GridContainer>
        {categories.categories &&
          categories.categories.map(({ id, title }) => (
            <div key={id}>{title}</div>
          ))}
      </GridContainer>
    </Container>
  );
};

export default App;
