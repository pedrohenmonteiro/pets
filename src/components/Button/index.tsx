type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "large";
};

const Button = ({ children, size = "small" }: ButtonProps) => {
  return (
    <button
      className={`bg-pink-500 hover:bg-pink-600 font-bold transition text-white rounded py-1 px-2 ${
        size == "small" ? "" : "w-full"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
