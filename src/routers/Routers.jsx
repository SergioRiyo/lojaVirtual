import React from "react";
import CadastroLogin from "../pages/cadastroLogin";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/login";
import Produto from "../conponentes/produto";
import PrivateRoute from "./Private";
export default function Routers() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/cadastroLogin" element={<CadastroLogin/>} />

      <Route path="/produtos" element={<PrivateRoute><Produto/></PrivateRoute>} />
      
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}