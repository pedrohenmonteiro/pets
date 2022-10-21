import { Routes, Route } from "react-router-dom";

export const Router = () => (
  <Routes>
    <Route path="/" element={<div>Teste</div>} />
    <Route path="/movie/:id" element={<div>Teste de página</div>} />
  </Routes>
);
