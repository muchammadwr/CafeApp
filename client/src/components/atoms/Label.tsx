import React from "react";

interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  return <label className="label-text">{label}</label>;
};

export default Label;
