import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";

const RouterLogin = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/criar" element={<SignUp />} />
  </Routes>
);

export default RouterLogin;
