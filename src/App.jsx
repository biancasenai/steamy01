import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import inicio from "./img/Inicio.png";
import inicio2 from "./img/Inicio2.png";
import Footer from "./components/Footer";
import Gato from "./pages/Gato";
import Roedores from "./pages/Roedores";
import Aves from "./pages/Aves";
import Cachorro from "./pages/Cachorro";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CarrinhoPage from "./pages/CarrinhoPage";

const App = () => {
  const [carrinhoItem, setCarrinhoItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("devcarrinho", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);

  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
  }, []);

  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== produto.id)
    );
  };

  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
          : item
      )
    );
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* --------------------------------------imagem pagina inicial */}
      <Header
        contadorJogos={carrinhoItem.length}
        style={{
          margin: "0", // Remove margens externas
          padding: "0", // Remove paddings internos
          boxSizing: "border-box", // Garante o cálculo correto do tamanho
        }}
      />
      <img
        src={inicio}
        alt=""
        style={{
          width: "100%", // Ajusta a largura para ocupar toda a tela
          height: "auto", // Mantém a proporção da imagem
        }}
      />

      {/* -------------------------------botões de navegação */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "200px",
        }}
      >
        <button
          style={{
            width: "810px",
            height: "720px",
            borderRadius: "30px",
            marginLeft: "250px",
            backgroundImage: "url('./src/img/DogInicio.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#B28914",
            fontSize: "30px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none", // Remove o contorno preto
            outline: "none", // Remove o contorno ao clicar
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona uma sombra sutil
          }}
          onClick={() => handleNavigation("/cachorro")}
        >
          Cachorros
        </button>
      </div>
    </>
  );
};

export default App;
