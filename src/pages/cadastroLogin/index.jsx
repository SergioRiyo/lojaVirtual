import React from "react";
import "./style.css";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Header from "../../conponentes/header";

export default function CadastroLogin(){
    const Navigate = useNavigate();
    return(
        <>
        <Header />
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

                <button onClick={()=>Navigate("/login")}>Criar conta</button>
                <p>Já tem conta?</p>

                <p><a onClick={()=>Navigate("/login")}>Entrar</a></p>
            </form>
        </div>
        </>
    )
}