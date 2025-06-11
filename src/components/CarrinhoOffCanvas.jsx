import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";

const CarrinhoOffCanvas = (props) => {
  const navigate = useNavigate();
  const { formatarMoeda } = useContext(GlobalContext);

  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("devcarrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const total = props.carrinhoItem.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      id="carrinhoOffCanvas"
      className="offcanvas offcanvas-end"
      style={{ background: "#DBF2FE", width: "5000px" }} // Alterei a largura da aba
    >
      <div
        className="offcanvas-header text-light d-flex justify-content-between align-items-center"
        style={{ background: "#7FB0CB", padding: "1.5rem" }} // Aumentei o padding
      >
        <h5
          className="offcanvas-title d-flex align-items-center gap-3"
          style={{ fontSize: "20px" }} // Aumentei o tamanho do texto
        >
          <i className="bi bi-bag fs-2"></i> {/* Aumentei o tamanho do ícone */}
          Sacola
        </h5>
        <i
          role="button"
          className="fs-3 p-0 m-0 bi bi-x" // Aumentei o tamanho do ícone de fechar
          data-bs-dismiss="offcanvas" // Adicionado para fechar a aba
          aria-label="Close" // Acessibilidade
          onClick={props.onClose}
        ></i>
      </div>

      <div className="offcanvas-body">
        {props.carrinho.length > 0 ? (
          props.carrinho.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold p-1">{item.titulo}</h6>
                <i
                  role="button"
                  className="bi bi-trash fs-5 text-danger"
                  onClick={() => props.onRemoveCarrinho(item)}
                ></i>
              </div>
              <div className="d-flex justify-content-between">
                <div className="border border-dark-subtle border-1 d-flex align-items-center rounded-4 gap-2">
                  <button
                    className="btn border-0"
                    disabled={item.quantidade === 1}
                    onClick={() =>
                      props.onUpdateCarrinho(item, item.quantidade - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    className="btn border-0"
                    onClick={() =>
                      props.onUpdateCarrinho(item, item.quantidade + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span className="fw-bold">R$ {item.preco}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;
