import React from "react";
import "./style.css";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function CadastroLogin(){
    const Navigate = useNavigate();
    return(
        <>
        <div className="header">
            <button className="navButton" onClick={() => Navigate("/produtos")}>Produtos</button>
            <button className="navButton" onClick={() => Navigate("/login")}>Login</button>
            <button className="navButton" onClick={() => Navigate("/cadastroLogin")}>Cadastro</button>
        </div>
        <div className="containerCadastroLogin">
            <form action="submit" className="CadastroLogin">
           
                    <h2>Criar uma conta</h2>
                

                <label>
                    Nome Completo
                    <input type="text" />
                </label>

                <label>
                    Email
                    <input type="email" />
                </label>

                <label>
                    Senha
                    <input type="password" />
                </label>

                <button>Criar conta</button>
                <p>Já tem conta?</p>

                <p><a href="">Entrar</a></p>
            </form>
        </div>
        </>
    )
}