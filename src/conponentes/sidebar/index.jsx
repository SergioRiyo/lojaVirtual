import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <button className="navButton" onClick={() => navigate("/produtos")}>
        Lista de Produtos
      </button>
      <button
        className="navButton"
        onClick={() => navigate("/cadastroProduto")}
      >
        Cadastrar Produto
      </button>
      <h2>Autenticação</h2>
      <div className="header-left">
        <button className="navButton" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="navButton" onClick={() => navigate("/cadastroLogin")}>
          Cadastro
        </button>
      </div>
    </div>
  );
}