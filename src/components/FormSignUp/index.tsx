import TextField from "../TextField";
import { BiUser } from "react-icons/bi";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "../Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const FormSignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      email: values.email,
      username: values.username,
      password: values.password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-8">
        <TextField
          name="username"
          placeholder="Username"
          onInputChange={(v) => handleInput("username", v)}
          icon={<BiUser />}
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          onInputChange={(v) => handleInput("email", v)}
          icon={<FiMail />}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          onInputChange={(v) => handleInput("password", v)}
          icon={<FiLock />}
        />
      </div>

      <Button type="submit" size="large">
        Sign up
      </Button>

      <p className="text-center my-4 text-sm">
        Already have an account?{" "}
        <Link to="/" className="font-bold underline text-pink-500">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default FormSignUp;
