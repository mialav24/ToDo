import { ButtonStyled } from "./Button.styles";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  type: "submit" | "button";
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant,
  disabled,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
