import { ButtonStyled } from "./Button.styles";

type ButtonProps = {
  type: "submit" | "button";
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant,
  disabled,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <ButtonStyled
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
