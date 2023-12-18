import Button from "../Button";
import Input from "../Input";
import {
  ButtonContainer,
  FormContainer,
  ModalContainer,
  ModalOverlay,
  TextArea,
} from "./Modal.styles";

type ModalProps = {
  closeModal?: () => void;
  categories: { id: string; title: string }[] | [];
};

const Modal = ({ closeModal, categories }: ModalProps) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Input placeholder="Type your task's title..." />
        <TextArea placeholder="Type your task..." name="" id=""></TextArea>
        <FormContainer>
          <select id="">
            <option value="" disabled selected>
              -- Select a category --
            </option>
            {categories.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
          <ButtonContainer>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
            <Button type="button" variant="primary" onClick={closeModal}>
              Close
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
