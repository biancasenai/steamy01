import React, { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7040/api/Produtos', {
      method: 'GET',
      headers: {
        'accept': 'text/plain',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

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
                <p className="card-text">{prod.descricao}</p>
                <p className="card-text"><strong>Preço:</strong> R$ {prod.preco}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;