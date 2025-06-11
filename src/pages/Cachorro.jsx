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
          height: "1050px",
          display: "block",
          marginBottom: "50px",
        }}
      />
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
    </div>
  );
};

export default Cachorro;
