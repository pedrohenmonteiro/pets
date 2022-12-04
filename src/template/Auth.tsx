import React from "react";

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => {
  return <div>{children}</div>;
};

export default Auth;
