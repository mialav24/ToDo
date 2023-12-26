import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./Button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant, ...props }: ButtonProps) => {
  return <ButtonStyled {...props} variant={variant} />;
};

export default Button;
