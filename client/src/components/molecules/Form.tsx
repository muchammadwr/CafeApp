import React from "react";
import Input from "../atoms/Input";

interface formProps {
  titleForm: string;
}

const Form: React.FC<formProps> = (Props) => {
  const { titleForm } = Props;
  return (
    <form className="form-control">
      <h3>{titleForm}</h3>
      <Input title="Username" type="text" value="text" onchange={}></Input>
    </form>
  );
};

export default Form;
