import { useState, useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  CriarProduto,
  LerProdutos,
} from "../../conponentes/data/fetchProdutos";
import { DataContext } from "../../conponentes/context/DataContext";
import Header from "../../conponentes/header";
import Sidebar from "../../conponentes/sidebar";

export default function cadastroProduto() {
  const navigate = useNavigate();
  const { produtos, setProdutos } = useContext(DataContext);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CriarProduto(nome, parseFloat(valor), imagem);
      await LerProdutos(setProdutos);
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
    alert(`Produto criado: ${nome}`);
  };

  return (
    <>
      <Sidebar />
      <Header />
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
