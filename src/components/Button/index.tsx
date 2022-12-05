import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, size = "small", ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "bg-pink-500 hover:bg-pink-600 font-bold transition text-white rounded py-1 px-2 disabled:opacity-50",
        {
          "w-full": size == "large",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
