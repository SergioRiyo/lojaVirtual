import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TbShoppingCartDiscount } from "react-icons/tb";
import Carrinho from "../carrinho";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { LerProdutos, DeletarProduto } from "../data/fetchProdutos";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { useState,useEffect} from "react";

export default function Produto() {
  const [carItens, setCarItens] = React.useState([]);
  const [mostrarCar, setMostrarCar] = React.useState(false);
  const { produtos, setProdutos } = React.useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.loginSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        window.history.replaceState({}, document.title);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  function addItem(item) {
    setCarItens((prev) => [...prev, item]);
  }

  async function removerProduto(id) {
    try {
      await DeletarProduto(id);
      const updatedProdutos = produtos.filter((item) => item.id !== id);
      setProdutos(updatedProdutos);
      await LerProdutos(setProdutos);
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }

  return (
    <>
      {showSuccess && (
        <div className="sucesso-login">✅ Sucesso, usuário logado!</div>
      )}
      <Sidebar />
      <Header />

      <div className="container">
        <div className="botaoCarrinho">
          <button onClick={() => setMostrarCar(true)}>
            <RiShoppingCart2Fill />
          </button>
          <span className="carCount">
            {carItens.length > 0 && carItens.length}
          </span>
        </div>

        {mostrarCar && (
          <div className="containerCarrinho show">
            <button
              className="closeCarrinho"
              onClick={() => setMostrarCar(false)}
            >
              <TbShoppingCartDiscount />
            </button>
            <Carrinho carItens={carItens} setCarItens={setCarItens} />
          </div>
        )}
        <div className="containerProdutos">
          {produtos?.map((item) => (
            <div key={item.id} className="produto">
              <img src={item.imagem} alt={item.nome} />
              <h4>{item.nome}</h4>
              <p>R$ {item.valor.toFixed(2)}</p>
              <button className="btncarrinho" onClick={() => addItem(item)}>
                Adicionar ao carrinho
              </button>
              <div className="produto-actions">
                <button
                  className="btn-remover"
                  onClick={() => removerProduto(item.id)}
                >
                  <GoTrash size={25} />
                </button>
                <button
                  className="btn-atualizar"
                  onClick={() => navigate(`/atualizarProduto/${item.id}`)}
                >
                  <CiEdit size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
