import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";

const CarrinhoOffCanvas = (props) => {
  const navigate = useNavigate();
  const { formatarMoeda } = useContext(GlobalContext);

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
        {props.carrinhoItem.length === 0 ? (
          <p className="text-center text-light">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush">
              {props.carrinhoItem.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-3 shadow mt-3 d-flex gap-3 rounded "
                  style={{ background: "#d9d9d9" }}
                >
                  <img
                    className="object-fit-cover rounded-2"
                    src={item.imagem}
                    alt={item.titulo}
                    width={60}
                    height={80}
                  />
                  <div className="w-100">
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
                          
                        </button>
                      </div>

                      <div className="d-flex flex-column align-items-end">
                        <span className="text-decoration-line-through small">
                          {formatarMoeda(item.preco)}
                        </span>
                        <span className="fw-bolder">
                          {formatarMoeda(
                            item.preco - (item.preco * item.desconto) / 100
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="text-white" />
            <div className="d-flex justify-content-between text-light fs-4">
              <strong>Total:</strong>
              <strong>{formatarMoeda(total)}</strong>
            </div>
            <button
              id="addCarrinho"
              className="btn btn-success desconto text-light border-0 w-100 mt-2 fs-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#carrinhoOffCanvas"
              onClick={goToCheckout}
            >
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;
