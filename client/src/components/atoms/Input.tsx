import React from "react";

interface InputProps {
  htmlFor: string;
  title: string;
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (Props) => {
  const { type, placeholder } = Props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default Input;
