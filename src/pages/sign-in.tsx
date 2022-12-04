import React from "react";
import FormSignIn from "../components/FormSignIn";
import Auth from "../template/Auth";

const SignIn = () => {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  );
};

export default SignIn;
