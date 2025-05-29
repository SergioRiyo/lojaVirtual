import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button className="navButton" onClick={() => navigate("/login")}>
        Login
      </button>
      <button className="navButton" onClick={() => navigate("/cadastroLogin")}>
        Cadastro
      </button>
      <button className="navButton" onClick={() => navigate("/produtos")}>
        Produtos
      </button>
      <button
        className="navButton"
        onClick={() => navigate("/cadastroProduto")}
      >
        Cadastrar Produto
      </button>
    </div>
  );
}
