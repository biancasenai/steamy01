import React from "react";
import Header from "../components/Header";

export const Cachorro = () => {
  return (
    <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
      <Header />
      <img
        src="./src/img/Cachorro.png"
        alt="Cachorro"
        style={{ width: "100%", height: "1350px", display: "block" }}
      />
      <div
        style={{
          backgroundColor: "#FFFBC7",
          width: "100%",
          height: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
        }}
      >
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#C9FBFF",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites do quadrado
            }}
          >
            <img
              src="./src/img/botaoCachorro1.png"
              alt="Botão Cachorro 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#FFD9AD",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="./src/img/botaoCachorro2.png"
              alt="Botão Cachorro 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#C7D8FF",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="./src/img/botaoCachorro3.png"
              alt="Botão Cachorro 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#FEC5FF",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="./src/img/botaoCachorro4.png"
              alt="Botão Cachorro 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <img
        src="./src/img/CachorroFim.png"
        alt="CachorroFim"
        style={{
          width: "100%",
          height: "1350px",
          display: "block",
          margin: "10",
        }}
      />
      <ul>
        {cachorros.map((cachorro, index) => (
          <li key={index}>
            {cachorro.nome} - {cachorro.raca}
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
