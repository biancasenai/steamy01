import React, { useEffect, useState, useContext } from "react";
import PromoCard from "./PromoCard.jsx";
import { GlobalContext } from "../main.jsx";

const PaginaInicial = (props) => {
  [];

 
  return (
    <div id="promotion" className="container w-75 my-4">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Promoções
      </h2>
      <img
        src="https://via.placeholder.com/600x200"
        alt="Promoção"
        className="img-fluid mb-4"
      />
      <div
        id="itensPromo"
        className="d-flex flex-wrap gap-4 justify-content-around"
      ></div>
    </div>
  );
};

export default PaginaInicial;
