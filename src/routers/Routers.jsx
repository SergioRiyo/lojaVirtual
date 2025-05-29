import React from "react";
import CadastroLogin from "../pages/cadastroLogin";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/login";
import Produto from "../conponentes/produto";
import PrivateRoute from "./Private";
import AtualizarProduto from "../pages/atualizarProduto";
import CadastroProduto from "../pages/cadastroProduto";
import Sidebar from "../conponentes/sidebar";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/cadastroLogin" element={<CadastroLogin/>} />

      <Route path="/produtos" element={<PrivateRoute><Produto/></PrivateRoute>} />
      
      <Route path="/login" element={<Login/>} />

      <Route path="/atualizarProduto" element={<AtualizarProduto />} />

      <Route path="/cadastroProduto" element={<CadastroProduto />} />

      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      <Route path="/sidebar" element={<Sidebar />} />

   </Routes>
      
      
  );
}