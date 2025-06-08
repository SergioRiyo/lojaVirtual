import React, { useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import {
  AtualizarProduto,
  LerProdutos,
} from "../../conponentes/data/fetchProdutos";
import { DataContext } from "../../conponentes/context/DataContext";
import Header from "../../conponentes/header";
import Sidebar from "../../conponentes/sidebar";

export default function EditarProduto() {
  const { id } = useParams();
  const { produtos, setProdutos } = React.useContext(DataContext);
  const produto = produtos.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();
  const [nome, setNome] = useState(produto?.nome);
  const [valor, setValor] = useState(produto?.valor);
  const [imagem, setImagem] = useState(produto?.imagem);

  const atualizar = async () => {
    try {
      await AtualizarProduto(Number(id), nome, parseFloat(valor), imagem);
      await LerProdutos(setProdutos);
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    atualizar();
  };

  return (
    <>
      <Sidebar />
      <Header />
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

          <div className="atualizar-botoes">
            <button type="submit" className="atualizar-btn">
              Editar
            </button>
            <button
              type="button"
              className="cancelar-btn"
              onClick={() => navigate("/produtos")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
