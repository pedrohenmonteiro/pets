import { Routes, Route } from "react-router-dom";

import Home from "../template/Home";
import RouterLogin from "./RouterLogin";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login/*" element={<RouterLogin />} />
  </Routes>
);
