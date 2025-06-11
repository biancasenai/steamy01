import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";

const Checkout = () => {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("devcarrinho");
    console.log(localStorage.getItem("devcarrinho"));
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });
  const [isHovered, setIsHovered] = useState(false);
  const [cupom, setCupom] = useState("");
  const [cupomAplicado, setCupomAplicado] = useState(false);
  const [cupomError, setCupomError] = useState("");
  const navigate = useNavigate();
  const { formatarMoeda } = useContext(GlobalContext);

  const subtotal = carrinho.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  const descontoCupom = cupomAplicado ? subtotal * 0.1 : 0;
  const total = subtotal - descontoCupom;

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("devcarrinho");
    itensCarrinho ? setCarrinho(JSON.parse(itensCarrinho)) : navigate("/");
  }, [navigate]);

  useEffect(() => {
    console.log("Carrinho:", carrinho);
  }, [carrinho]);

  const handleConfirmar = () => {
    alert("Compra confirmada! Obrigado 😊");
    localStorage.removeItem("devcarrinho");
    navigate("/");
  };

  const handleUpdateQuantidade = (item, novaQuantidade) => {
    const novoCarrinho = carrinho.map((produto) =>
      produto.id === item.id
        ? { ...produto, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
        : produto
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));
  };

  const handleRemoverItem = (item) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== item.id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));

    if (novoCarrinho.length === 0) {
      navigate("/");
    }
  };

  const aplicarCupom = () => {
    if (cupom.trim().toLowerCase() === "devpedreiro") {
      setCupomAplicado(true);
      setCupomError("");
    } else {
      setCupomAplicado(false);
      setCupomError("Cupom inválido");
    }
  };

  const removerCupom = () => {
    setCupom("");
    setCupomAplicado(false);
    setCupomError("");
  };

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* ... Coluna do carrinho permanece a mesma ... */}
        <div className="col-lg-8">
          <div
            className="card border-0 shadow-sm rounded-4 mb-4"
            style={{ background: "#d9d9d9" }}
          >
            <div className="card-header border-bottom-0 py-3">
              <h4 className="mb-0 fw-bolder">Meu Carrinho</h4>
            </div>
            <div className="card-body p-4">
              {carrinho.length > 0 ? (
                carrinho.map((produto) => (
                  <div key={produto.id}>
                    <h5>{produto.nome}</h5>
                    <p>Preço: R$ {produto.preco}</p>
                  </div>
                ))
              ) : (
                <p>Seu carrinho está vazio.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div
            className="card border-0 shadow-sm rounded-4"
            style={{ background: "#d9d9d9" }}
          >
            <div className="card-header border-bottom-0 py-3">
              <h4 className="mb-0 fw-bolder">Resumo do Pedido</h4>
            </div>
            <div className="card-body p-4 pt-3">
              {/* Seção do cupom de desconto - AGORA NO TOPO */}
              <div className="mb-3">
                <label htmlFor="cupom" className="form-label mb-2">
                  cupom de desconto
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${
                      cupomError ? "is-invalid" : ""
                    } bg-transparent border-dark-subtle`}
                    id="cupom"
                    placeholder="Digite seu cupom"
                    value={cupom}
                    onKeyDown={(e) => e.key === "Enter" && aplicarCupom()}
                    onChange={(e) => setCupom(e.target.value)}
                    disabled={cupomAplicado}
                  />
                  {!cupomAplicado ? (
                    <button
                      id="addCarrinho"
                      className="btn btn-success desconto text-light border-0"
                      type="button"
                      onClick={aplicarCupom}
                    >
                      Aplicar
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={removerCupom}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  )}
                </div>
                {cupomError && (
                  <div className="text-danger small mt-1">{cupomError}</div>
                )}
              </div>

              {/* PRIMEIRO DIVISOR */}
              <hr className="my-3" />

              {/* Seção de subtotal e frete */}
              <div className="d-flex justify-content-between mb-2">
                <span>
                  Subtotal ({carrinho.length}{" "}
                  {carrinho.length === 1 ? "item" : "itens"})
                </span>
                <span>{formatarMoeda(subtotal)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Frete</span>
                <span className="text-success">Grátis</span>
              </div>

              {/* Exibe o desconto do cupom quando aplicado */}
              {cupomAplicado && (
                <div className="d-flex justify-content-between mb-2 mt-2">
                  <span className="text-success">Desconto (10%)</span>
                  <span className="text-success">
                    -{formatarMoeda(descontoCupom)}
                  </span>
                </div>
              )}

              {/* SEGUNDO DIVISOR */}
              <hr className="my-3" />

              {/* Seção do total */}
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold fs-4">{formatarMoeda(total)}</span>
              </div>

              {/* Botões de ação */}
              <button
                id="addCarrinho"
                className="btn btn-success desconto border-0 text-light w-100 py-3 fw-bold"
                onClick={handleConfirmar}
                disabled={carrinho.length === 0}
              >
                Finalizar Compra
              </button>

              <button
                style={{
                  background: isHovered && "#2a475e",
                  borderColor: "#2a475e",
                  color: !isHovered && "#2a475e",
                }}
                className="btn btn-outline-secondary w-100 mt-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate("/")}
              >
                Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
