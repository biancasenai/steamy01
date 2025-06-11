import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import inicio from "./img/Inicio.png";
import Footer from "./components/Footer";
import Gato from "./pages/Gato";
import Roedores from "./pages/Roedores";
import Aves from "./pages/Aves";
import Cachorro from "./pages/Cachorro";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";

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
          display: "flex", // Define o layout flexível
          justifyContent: "center", // Centraliza os botões horizontalmente
          alignItems: "center", // Centraliza os botões verticalmente
          height: "90vh", // Faz o contêiner ocupar quase toda a altura da página
          gap: "30px", // Espaçamento entre o botão "Cachorros" e o grupo de botões à direita
        }}
      >
        {/* Botão Cachorros (à esquerda) */}
        <button
          style={{
            width: "800px", // Aumentei o tamanho
            height: "700px", // Aumentei o tamanho
            borderRadius: "20px",
            backgroundImage: "url('./src/img/DogInicio.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#B28914",
            fontSize: "24px", // Aumentei o tamanho da fonte
            fontWeight: "bold",
            position: "relative", // Necessário para posicionar o texto dentro do botão
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none", // Remove o contorno preto
            outline: "none", // Remove o contorno ao clicar
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona uma sombra sutil
          }}
          onClick={() => handleNavigation("/cachorro")}
        >
          <span
            style={{
              position: "absolute",
              bottom: "10px", // Posiciona o texto no canto inferior direito
              right: "10px",
            }}
          >
            Cachorros
          </span>
        </button>

        {/* Contêiner para os botões Ave, Roedores e Gato */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Organiza os botões verticalmente
            gap: "15px", // Reduz o espaçamento entre os botões Ave/Roedores e o botão Gato
          }}
        >
          {/* Botões Ave e Roedores (lado a lado) */}
          <div
            style={{
              display: "flex",
              gap: "10px", // Reduz o espaçamento entre os botões Ave e Roedores
            }}
          >
            <button
              style={{
                width: "350px", // Aumentei o tamanho
                height: "300px", // Aumentei o tamanho
                borderRadius: "20px",
                backgroundImage: "url('./src/img/Ave.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#6d53b7",
                fontSize: "20px",
                fontWeight: "bold",
                position: "relative", // Necessário para posicionar o texto dentro do botão
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => handleNavigation("/aves")}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "10px", // Posiciona o texto no canto inferior direito
                  right: "10px",
                }}
              >
                Aves
              </span>
            </button>

            <button
              style={{
                width: "350px", // Aumentei o tamanho
                height: "300px", // Aumentei o tamanho
                borderRadius: "20px",
                backgroundImage: "url('./src/img/Roedor.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#FF6877",
                fontSize: "20px",
                fontWeight: "bold",
                position: "relative", // Necessário para posicionar o texto dentro do botão
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => handleNavigation("/roedores")}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "10px", // Posiciona o texto no canto inferior direito
                  right: "10px",
                }}
              >
                Roedores
              </span>
            </button>
          </div>

          {/* Botão Gatos (abaixo dos botões Ave e Roedores) */}
          <button
            style={{
              width: "720px", // Aumentei o tamanho
              height: "350px", // Aumentei o tamanho
              borderRadius: "20px",
              backgroundImage: "url('./src/img/GatoBotao.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#3969B1",
              fontSize: "20px",
              fontWeight: "bold",
              position: "relative", // Necessário para posicionar o texto dentro do botão
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              outline: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => handleNavigation("/gato")}
          >
            <span
              style={{
                position: "absolute",
                bottom: "10px", // Posiciona o texto no canto inferior direito
                right: "10px",
              }}
            >
              Gatos
            </span>
          </button>
        </div>
      </div>

      {/* Segunda imagem abaixo dos botões */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centraliza a imagem horizontalmente
          marginTop: "30px", // Espaçamento superior
        }}
      >
        <img
          src="./src/img/Inicio2.png"
          alt="Segunda imagem de fundo"
          style={{
            width: "100%", // Ajusta a largura para ocupar toda a tela
            height: "auto", // Mantém a proporção da imagem
          }}
        />
      </div>
    </>
  );
};

export default App;
