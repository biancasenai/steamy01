import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import inicio from "./img/Inicio.png";
import inicio2 from "./img/Inicio2.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import inicial from "./img/logo.png";

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

  // console.log(localStorage.getItem("devcarrinho"));

  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      if (existe) {
        return itemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...itemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

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

  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <img src={inicio} alt="" style={{ width: "2550px", height: "1000px" }} />

      <img
        src={inicio2}
        alt=""
        style={{ width: "2550px", height: "1000px", marginTop: "100px" }}
      />
      <button
        onClick={() => navigate("/login")}
        style={{
          position: "absolute",
          top: "180%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "25px 100px",
          fontSize: "16px",
          backgroundColor: "#C0DBEA",
          color: "#090909",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Cadastrar-se
      </button>

      <div
        style={{
          backgroundColor: "#9CD1EE",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      <button
              onClick={() => window.open("https://wa.me/5599999999999", "_blank")}
        style={{
          position: "absolute",
          top: "200%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "25px 100px",
          fontSize: "16px",
          backgroundColor: "#FFA6CC",
          color: "#ffffff",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Fale conosco pelo WhatsApp
      </button>

      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
    </>
  );
};

export default App;
