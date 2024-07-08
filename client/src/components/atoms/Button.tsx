import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (Props) => {
  const { children, onClick, type, disabled = false } = Props;
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
