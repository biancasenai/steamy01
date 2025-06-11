import React, { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      const dadosTotais = [];

      try {
        const resProdutos = await fetch('https://localhost:7040/api/Produtos');
        if (resProdutos.ok) {
          const produtos = await resProdutos.json();
          dadosTotais.push(...produtos);
        }
      } catch {}

      try {
        const resItens = await fetch('https://localhost:7040/api/Itens');
        if (resItens.ok) {
          const itens = await resItens.json();
          dadosTotais.push(...itens);
        }
      } catch {}

      setProdutos(dadosTotais);
    };

    buscarDados();
  }, []);

  return (
    <div className="container">
      <h2>Produtos encontrados:</h2>
      <div className="row">
        {produtos.map(prod => (
          <div key={prod.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={prod.imagemUrl || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={prod.nome || "Produto"}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.nome || "Sem nome"}</h5>
                <p className="card-text">{prod.descricao || "Sem descrição"}</p>
                <p className="card-text">
                  <strong>Preço:</strong> R$ {prod.preco?.toFixed(2) || "0,00"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
