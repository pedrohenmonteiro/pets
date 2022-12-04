import TextField from "../TextField";
import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import Button from "../Button";
import { Link } from "react-router-dom";
import React from "react";

const FormSignIn = () => {
  return (
    <form>
      <div className="flex flex-col gap-2 mb-2">
        <TextField name="username" icon={<BiUser />} placeholder="Username" />
        <TextField
          name="password"
          type="password"
          icon={<FiLock />}
          placeholder="Password"
        />
      </div>
      <p className="text-right mb-8 text-sm hover:text-sky-800">
        <Link to="/">Forgot your password?</Link>
      </p>

      <Button size="large">Sign in</Button>

      <p className="text-center my-4 text-sm">
        Don't have an account?{" "}
        <Link to="/criar" className="font-bold underline text-pink-500">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormSignIn;
