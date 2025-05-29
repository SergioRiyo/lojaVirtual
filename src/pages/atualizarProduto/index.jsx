import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function AtualizarProduto() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("Produto Exemplo");
  const [valor, setValor] = useState("199.99");
  const [imagem, setImagem] = useState("https://via.placeholder.com/150");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Produto atualizado!");
  };

  return (
    <>
    <div className="header">
        <button className="navButton" onClick={() => navigate("/produtos")}>
          Produtos
        </button>
        <button className="navButton" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="navButton"
          onClick={() => navigate("/cadastroLogin")}
        >
          Cadastro
        </button>
    </div>
    <div className="atualizar-container">
      <form onSubmit={handleSubmit} className="atualizar-form">
        <h2 className="atualizar-titulo">Atualizar Produto</h2>

        <label className="atualizar-label">Nome:</label>
        <input
          className="atualizar-input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="atualizar-label">Valor (R$):</label>
        <input
          type="number"
          className="atualizar-input"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <label className="atualizar-label">URL da Imagem:</label>
        <input
          type="url"
          className="atualizar-input"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button className="atualizar-btn">Atualizar</button>
      </form>
    </div>
    </>
  );
}