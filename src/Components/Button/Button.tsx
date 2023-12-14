import { ButtonStyled } from "./Button.styles";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({ children, variant, disabled }: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
