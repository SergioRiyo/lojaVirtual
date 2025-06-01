import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { BsGpuCard } from "react-icons/bs";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-esqueda">
        <button className="navButton" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="navButton" onClick={() => navigate("/cadastroLogin")}>
          Cadastro
        </button>
      </div>
      <div className="header-meio">
        <div className="gpuCard"><BsGpuCard /></div>
        <h1>Loja</h1>
      </div>
      <div className="header-direita">{}</div>
    </div>
  );
}