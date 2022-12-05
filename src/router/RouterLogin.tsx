import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";

const RouterLogin = () => {
  const { login } = useContext(AuthContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/criar" element={<SignUp />} />
    </Routes>
  );
};

export default RouterLogin;
