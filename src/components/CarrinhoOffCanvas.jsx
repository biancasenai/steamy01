import React from "react";
import Header from "./Header"; // Importando o Header

const CarrinhoOffCanvas = ({ carrinhoItens, formatarMoeda }) => {
  const total = carrinhoItens.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Header contadorJogos={carrinhoItens.length} /> {/* Adicionando o Header */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Seu Carrinho</h1>
        {carrinhoItens.length === 0 ? (
          <p className="text-center text-muted">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush mb-4">
              {carrinhoItens.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.imagem}
                      alt={item.titulo}
                      className="rounded me-3"
                      width={60}
                      height={80}
                    />
                    <div>
                      <h6 className="mb-1">{item.titulo}</h6>
                      <small className="text-muted">
                        {formatarMoeda(item.preco)}
                      </small>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-decoration-line-through small d-block">
                      {formatarMoeda(item.preco)}
                    </span>
                    <span className="fw-bold">
                      {formatarMoeda(
                        item.preco - (item.preco * item.desconto) / 100
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <strong className="fs-5">Total:</strong>
              <strong className="fs-5">{formatarMoeda(total)}</strong>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success btn-lg"
                onClick={() => alert("Finalizar Compra!")}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;