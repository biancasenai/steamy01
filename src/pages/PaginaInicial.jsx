import React, { useEffect, useState } from "react";

const PaginaInicial = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("https://localhost:7040/api/Oferta", {
          headers: {
            accept: "text/plain",
          },
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar os produtos");
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div id="promotion" className="container w-75 my-4">
      <div className="d-flex flex-wrap gap-4 justify-content-around">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="card"
            style={{
              width: "18rem",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <img
              src={produto.imagemUrl || "https://placehold.co/150"}
              className="card-img-top"
              alt={produto.nome}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">Descrição: {produto.descricao}</p>
              <p className="card-text">Preço: R$ {produto.preco.toFixed(2)}</p>
              <p className="card-text">Desconto: {produto.desconto}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaInicial;
