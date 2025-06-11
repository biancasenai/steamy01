import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export const Cachorro = () => {
  const [cachorros, setCachorros] = useState([]);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("https://vetsys.somee.com/api/Cachorros", {
      method: "GET",
      headers: {
        accept: "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => setCachorros(data))
      .catch((error) => console.error("Error fetching Cachorros data:", error));

    fetch("https://vetsys.somee.com/api/Itens", {
      method: "GET",
      headers: {
        accept: "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.error("Error fetching Itens data:", error));
  }, []);

  return (
    <div>
      <Header />
      <img
        src="./src/img/Cachorro.png"
        alt="Cachorro"
        style={{
          width: "100%",
          height: "1050px",
          display: "block",
          marginBottom: "20px",
        }}
      />
      <img
        src="./src/img/CachorroFim.png"
        alt="CachorroFim"
        style={{
          width: "100%",
          height: "1050px",
          display: "block",
          marginTop: "20px",
        }}
      />
      <ul>
        {cachorros.map((cachorro, index) => (
          <li key={index}>
            <img src="https://placehold.co/200" alt="" />
            <strong>Ração:</strong> {cachorro.racao} <br />
            <strong>Petisco:</strong> {cachorro.petisco} <br />
            <strong>Brinquedo:</strong> {cachorro.brinquedo} <br />
            <strong>Preço:</strong> R$ {cachorro.preco} <br />
            <strong>Ingrediente ou Sabor:</strong> {cachorro.ingredienteOuSabor}{" "}
            <br />
            <strong>Descrição:</strong> {cachorro.descricao} <br />
            <strong>Tamanho:</strong> {cachorro.tamanho} <br />
            <strong>Idade:</strong> {cachorro.idade} <br />
          </li>
        ))}
      </ul>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cachorro;
