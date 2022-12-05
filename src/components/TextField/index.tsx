import classNames from "classnames";
import React, { InputHTMLAttributes, useState } from "react";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  icon?: React.ReactNode;
  initialValue?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const TextField = ({
  onInputChange,
  icon,
  initialValue = "",
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <>
      <div
        className={classNames(
          "bg-gray-100 flex items-center rounded-sm px-4 border-2 border-gray-400",
          {
            "border-red-400 border-[3px] ": error,
          }
        )}
      >
        <div
          className={classNames("text-xl text-gray-500", {
            "text-red-500": error,
          })}
        >
          {!!icon && icon}
        </div>
        <input
          className="bg-transparent outline-0 py-2 pl-4 w-full placeholder-gray-500"
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
      {!!error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default TextField;
