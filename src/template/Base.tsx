import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Base;
