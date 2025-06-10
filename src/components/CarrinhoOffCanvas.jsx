import React from "react";
import Header from "./Header"; // Importando o Header

const CarrinhoOffCanvas = ({ carrinhoItens, formatarMoeda }) => {
  const total = Array.isArray(carrinhoItens) && carrinhoItens.length > 0
    ? carrinhoItens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
    : 0;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Header contadorJogos={Array.isArray(carrinhoItens) ? carrinhoItens.length : 0} /> {/* Adicionando o Header */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Seu Carrinho</h1>
        {Array.isArray(carrinhoItens) && carrinhoItens.length > 0 ? (
          carrinhoItens.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <p>Nome: {item.nome}</p>
              <p>Preço: R$ {item.preco.toFixed(2)}</p>
              <p>Quantidade: {item.quantidade}</p>
            </div>
          ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;