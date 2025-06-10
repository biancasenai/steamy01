import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./App.css";
import inicio from "./img/Inicio.png";
import inicio2 from "./img/Inicio2.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gato from "./pages/Gato";
import Roedores from "./pages/Roedores";
import Aves from "./pages/Aves";
import Cachorro from "./pages/Cachorro";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

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
      <img src={inicio} alt="" style={{ width: "2513px", height: "1000px" }} />

      <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
        <button
          style={{
            width: "780px",
            height: "720px",
            borderRadius: "30px",
            marginLeft: "250px",
            backgroundImage: "url('./src/img/DogInicio.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#B28914", 
            fontSize: "30px", 
            fontWeight: "bold", 
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
          onClick={() => handleNavigation("/cachorro")}
        >

<span
    style={{
      position: "absolute", 
      top: "10px", 
      right: "10px", 
    }}
  >
          Cachorros
          </span>
        </button>
        
        <button
          style={{
            width: "420px",
            height: "370px",
            borderRadius: "30px",
            marginLeft: "10px",
            backgroundImage: "url('./src/img/Ave.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#6d53b7", 
            fontSize: "30px",
            fontWeight: "bold", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          onClick={() => handleNavigation("/aves")}
        >
          <span
    style={{
      position: "absolute", 
      top: "10px", 
      right: "10px", 
    }}
  >

          Aves
  </span>
        </button>

        <button
          style={{
            width: "800px",
            height: "320px",
            borderRadius: "30px",
            marginTop: "400px",
            marginLeft: "-430px",
            backgroundImage: "url('./src/img/GatoBotao.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#3969B1", 
            fontSize: "30px", 
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          onClick={() => handleNavigation("/gato")}
        >
         <span
    style={{
      position: "absolute", 
      top: "10px", 
      left: "10px", 
    }}
  >   
          Gatos
          </span>
        </button>

        <button
          style={{
            width: "420px",
            height: "370px",
            borderRadius: "30px",
            marginLeft: "-370px",
            backgroundImage: "url('./src/img/RoedoresBotão.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#FF6877", 
            fontSize: "30px", 
            fontWeight: "bold", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          onClick={() => handleNavigation("/roedores")}
        >
          <span
    style={{
      position: "absolute", 
      top: "10px", 
      right: "10px", 
    }}
  >

          Roedores
  </span>
        </button>
      </div>
      <img
        src={inicio2}
        alt=""
        style={{ width: "2513px", height: "1000px", marginTop: "100px" }}
      />
     

      <div
        style={{
          backgroundColor: "#9CD1EE",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF", 
          fontSize: "30px", 
          fontWeight: "bold", 
          textAlign: "center",
         
        }}
      >
        <button
          onClick={() => window.open("https://wa.me/5514991451508", "_blank")}
          style={{
            padding: "25px 100px",
            marginTop: "-100px",
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
      
      <div>
        <Footer /> 
      </div>
    </>
  );
};

export default App;
