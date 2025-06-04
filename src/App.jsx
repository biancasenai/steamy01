import { useEffect, useState } from "react";
import "./App.css";
import inicio from "./img/Inicio.png";
import dog from "./img/DogInicio.png";
import Header from "./components/Header";
import PaginaInicial from "./Gato.jsx/PaginaInicial";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

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

      {/* Adicionando 5 botões */}
      <div style={{ margin: "170px" }}>
        <button onClick={() => alert("Botão 1 clicado!")}>Botão 1</button>
        <button onClick={() => alert("Botão 2 clicado!")}>Botão 2</button>
        <button onClick={() => alert("Botão 3 clicado!")}>Botão 3</button>
        <button onClick={() => alert("Botão 4 clicado!")}>Botão 4</button>
      </div>

      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
    </>
  );
}

export default App;
