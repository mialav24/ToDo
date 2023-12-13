import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
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
    setCategories((prev) => ({
      categories: [...prev.categories, { id: uuidv4(), title: categoryTitle }],
    }));
    setCategoryTitle("");
  };
  console.log(categories);

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={categoryTitle}
          placeholder="Type your category..."
        />
        <Button />
        {categories.categories.length >= 1 && <Button />}
      </FormContainer>
    </Container>
  );
};

export default App;
