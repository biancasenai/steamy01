import React, { useEffect, useState, useContext } from "react";
import PromoCard from "../components/PromoCard.jsx";
import { GlobalContext } from "../main.jsx";

const PaginaInicial = (props) => {
  const [aleatorio, setAleatorio] = useState([]);
  const { formatarMoeda } = useContext(GlobalContext);

  const games = React.useMemo;

  useEffect(() => {
    const aleatorioJogos = games
      .filter((jogo) => jogo.desconto > 0)
      //.sort((a, b) => b.desconto - a.desconto) //ordenação por desconto decrescente
      .sort(() => Math.random() - 0.5) //ordenação aleatória
      .slice(0, 3);

    setAleatorio(aleatorioJogos);
  }, [games]);

  return (
    <div id="promotion" className="container w-75 my-4">
      <div>
        {/* mapeando um array com react */}
        <img
          src="../img/Inicio.png"
          alt="cãoegato"
          className="d-flex flex-wrap gap-4 justify-content-around"
        />
      </div>
    </div>
  );
};

export default PaginaInicial;
