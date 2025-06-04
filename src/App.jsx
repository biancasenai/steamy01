import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <img
        src={inicio}
        alt=""
        style={{ width: "2513px", height: "1000px" }}
      />

      <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
      <button  style={{width:"780px", height:"720px", borderRadius:"30px",marginLeft:"130px"}}   onClick={() => handleNavigation("/cachorro")}>Cachorro</button>
      <button  style={{width:"420px",height:"370px",borderRadius:"30px",marginLeft:"10px"}}  onClick={() => handleNavigation("/aves")}>Aves</button>

      <button  style={{width:"800px",height:"320px",borderRadius:"30px", marginTop:"400px",marginLeft:"-430px"}} onClick={() => handleNavigation("/gato")}>Gato</button>

      <button  style={{width:"420px",height:"370px",borderRadius:"30px",marginLeft:"-370px"}}  onClick={() => handleNavigation("/roedores")}>Roedores</button>
      </div>
      <img
        src={inicio2}
        alt=""
        style={{ width: "2513px", height: "1000px", marginTop: "100px" }}
      />
  <button
          onClick={() => navigate("/Cadastro")}
          style={{
            position: "absolute",
            top: "240%",
            left: "30%",
            
            padding: "25px 100px",
            fontSize: "26px",
            backgroundColor: "#C0DBEA",
            color: "#fff",
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
        height: "50vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() =>
          window.open("https://wa.me/5511999999999", "_blank")
        }
        style={{
          padding: "25px 100px",
          marginTop:"-100px",
          fontSize: "26px",
          backgroundColor: "#FFA6CC",
          color: "#ffffff",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        Fale conosco pelo WhatsApp
      </button>
    </div>
      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
    </>
  );
};

export default App;
