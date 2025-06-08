import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Header from "../../conponentes/header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState("");
  const [senha, setSenha] = React.useState("");

const login = () => {
  if (user && senha) {
    localStorage.setItem("auth", "true");
    navigate("/produtos", { state: { loginSuccess: true } }); // aqui é a mudança
  } else {
    alert("Preencher os campos");
  }
};

  return (
    <>

      <Header />
      <div className="containerLogin">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
          className="login"
        >
          <h2>Bem-vindo</h2>

          <label>
            Email
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
            />
          </label>

          <label>
            Senha
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
            />
          </label>

          <button>Entrar</button>
          <p>
            <a href="">Esqueceu sua senha?</a>
          </p>

          <p>
            Nao tem conta? <a onClick={()=>navigate("/cadastroLogin")}>Cadastre-se</a>
          </p>
        </form>
      </div>
    </>
  );
}
