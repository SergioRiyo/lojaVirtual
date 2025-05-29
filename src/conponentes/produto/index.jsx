import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { produtos as produtosOriginais } from "./produtos";
import Carrinho from "../carrinho";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Produto() {
  const [carItens, setCarItens] = React.useState([]);
  const [mostrarCar, setMostrarCar] = React.useState(false);
  const [produtos, setProdutos] = React.useState(produtosOriginais);
  const navigate = useNavigate();

  function addItem(item) {
    setCarItens((prev) => [...prev, item]);
  }

  function removerProduto(nome) {
    setProdutos((prev) => prev.filter((item) => item.nome !== nome));
  }

  function atualizarProduto() {
    navigate("/atualizarProduto");
  }

  return (
    <>
      <Sidebar />
      <Header />

      <div className="container">
        <div className="botaoCarrinho">
          <button onClick={() => setMostrarCar(true)}>
            <RiShoppingCart2Fill />
          </button>
          <span className="carCount">{carItens.length > 0 && carItens.length}</span>
        </div>

        {mostrarCar && (
          <div className="containerCarrinho show">
            <button className="closeCarrinho" onClick={() => setMostrarCar(false)}>
              <TbShoppingCartDiscount />
            </button>
            <Carrinho carItens={carItens} setCarItens={setCarItens} />
          </div>
        )}

        <div className="containerProdutos">
          {produtos?.map((item) => (
            <div key={item.nome} className="produto">
              <img src={item.imagem} alt={item.nome} />
              <h4>{item.nome}</h4>
              <p>R$ {item.valor.toFixed(2)}</p>
              <button onClick={() => addItem(item)}>Comprar</button>
              <div className="produto-actions">
                <button
                  className="btn-remover"
                  onClick={() => removerProduto(item.nome)}
                >
                  Remover
                </button>
                <button
                  className="btn-atualizar"
                  onClick={atualizarProduto}
                >
                  Atualizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}