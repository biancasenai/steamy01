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
        style={{ width: "2017px", height: "1000px" }}
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
        style={{ width: "2017px", height: "700px", marginTop: "900px" }}
      />


      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
    </>
  );
};

export default App;
