import React from "react";
import CadastroLogin from "../pages/cadastroLogin";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/login";
import Produto from "../conponentes/produto";
export default function Routers() {
  return (
    <Routes>
      <Route index element={<Produto />} />
      <Route path="/cadastroLogin" element={<CadastroLogin/>} />
      <Route path="/produtos" element={<Produto/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}