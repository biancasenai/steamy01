import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import Gato from "./pages/Gato.jsx";
import Roedores from "./pages/Roedores.jsx";
import Aves from "./pages/Aves.jsx";
import Footer from "./components/Footer.jsx";
import Cachorro from "./pages/Cachorro.jsx";
import Cadastro from "./pages/Cadastro.jsx";


// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/carrinho" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gato" element={<Gato/>} />
          <Route path="/cachorro" element={<Cachorro/>} />
          <Route path="/aves" element={<Aves />} />
          <Route path="/roedores" element={<Roedores />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
