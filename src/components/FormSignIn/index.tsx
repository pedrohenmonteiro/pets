import TextField from "../TextField";
import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TOKEN_POST, USER_GET } from "../../services/api";
import AuthContext from "../../contexts/AuthContext";

const FormSignIn = () => {
  const { userLogin, error, loading } = useContext(AuthContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-2">
        <TextField
          name="username"
          icon={<BiUser />}
          onInputChange={(v) => handleInput("username", v)}
          placeholder="Username"
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          onInputChange={(v) => handleInput("password", v)}
          icon={<FiLock />}
        />
      </div>
      <p className="text-right mb-8 text-sm hover:text-sky-800">
        <Link to="/">Forgot your password?</Link>
      </p>

      {!!loading ? (
        <Button disabled type="submit" size="large">
          Sign in
        </Button>
      ) : (
        <Button type="submit" size="large">
          Sign in
        </Button>
      )}
      {!!error && <p className="text-red-500 text-center">{error}</p>}

      <p className="text-center my-4 text-sm">
        Don't have an account?{" "}
        <Link to="/login/criar" className="font-bold underline text-pink-500">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormSignIn;
