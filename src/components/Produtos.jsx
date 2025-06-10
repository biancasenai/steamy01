import React, { useEffect, useState } from "react";
import axios from "axios";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState("gato"); // você pode mudar esse termo dinamicamente

  useEffect(() => {
    axios.get(`https://localhost:7040/api/Itens/buscar?termo=ra%C3%A7%C3%A3o=${termoBusca}`)
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, [termoBusca]);

  return (
    <div className="container">
      <h2>Produtos encontrados:</h2>
      <div className="row">
        {produtos.map(prod => (
          <div key={prod.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={prod.imagemUrl} className="card-img-top" alt={prod.nome} />
              <div className="card-body">
                <h5 className="card-title">{prod.nome}</h5>
                <p className="card-text">Categoria: {prod.categoria}</p>
                <p className="card-text">Preço: R${prod.preco}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
