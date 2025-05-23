import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
export default function Login(){
    const Navigate = useNavigate();
    return(
        <>
        <div className="header">
            <button className="navButton" onClick={() => Navigate("/produtos")}>Produtos</button>
            <button className="navButton" onClick={() => Navigate("/login")}>Login</button>
            <button className="navButton" onClick={() => Navigate("/cadastroLogin")}>Cadastro</button>
        </div>
        <div className="containerLogin">
            <form action="submit" className="login">
                <h2>Bem-vindo de volta <br></br> à <b>Loja...</b></h2>

                <label>
                    Email
                    <input type="email" />
                </label>

                <label>
                    Senha
                    <input type="password" />
                </label>

                <button>Entrar</button>
                <p><a href="">Esqueceu sua senha?</a></p>

                <p>Nao tem conta? <a href="">Cadastre-se</a></p>
            </form>
        </div>
        </>
    )
}