import { ChangeEvent } from "react";
import { InputStyled } from "./Input.styles";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
};

const Input = ({ onChange, value, placeholder }: InputProps) => {
  return (
    <InputStyled
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
