import React, { InputHTMLAttributes, useState } from "react";
import { FiMail } from "react-icons/fi";

export type TextFieldProps = {
  icon?: React.ReactNode;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ icon, initialValue = "", ...props }: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className="bg-gray-100 flex items-center rounded-sm px-4 border-2 border-gray-400 ">
      <div className="text-xl text-gray-500">{!!icon && icon}</div>
      <input
        className="bg-transparent outline-0 py-2 pl-4 w-full placeholder-gray-500"
        type="text"
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default TextField;
