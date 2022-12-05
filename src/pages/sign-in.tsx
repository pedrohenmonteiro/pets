import React from "react";
import FormSignIn from "../components/FormSignIn";
import Auth from "../template/Auth";
import Base from "../template/Base";

const SignIn = () => {
  return (
    <Base>
      <Auth title="Sign in">
        <FormSignIn />
      </Auth>
    </Base>
  );
};

export default SignIn;
