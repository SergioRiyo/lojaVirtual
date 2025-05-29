import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CriarProduto() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Produto criado: ${nome}`);
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
      <div className="container-form">
        <form onSubmit={handleSubmit} className="form-box">
          <h2 className="form-title">Cadastrar Produto</h2>

          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label className="form-label">Valor (R$):</label>
          <input
            type="number"
            className="form-input"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

          <label className="form-label">URL da Imagem:</label>
          <input
            type="url"
            className="form-input"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />

          <button type="submit" className="btn-submit">
            Criar
          </button>
        </form>
      </div>
    </>
  );
}
