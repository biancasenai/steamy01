import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../img/logo.png";

const Header = (props) => {
  const [Usuario, setUsuario] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    if (salvaUsuario) {
      setUsuario(JSON.parse(salvaUsuario));
    }
  }, []);

  const deletarConta = async (usuarioId) => {
    await fetch(`https://localhost:7040/api/Cadastros/${usuarioId}`, {
      method: "DELETE",
    });

    localStorage.removeItem("devlogin");
    setUsuario(null);
    Navigate("/");
  };

  return (
    <header className="w-100 navbar navbar justify-content-around align-items-center" style={{ backgroundColor: "#7FB0CB" }}>
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo" role="button" className="d-flex align-items-center me-5">
          <img src="./src/img/logo.png" alt="Logo" className="img-fluid" />
        </div>

        <input
          type="text"
          className="d-none d-md-block px-4 my-2 ms-5 text-light"
          placeholder="O que seu pet precisa?"
          style={{
            borderRadius: "80px",
            width: "600px",
            height: "40px",
            backgroundColor: "#00000033",
          }}
        />
      </div>

      <div id="carrinho" className="d-flex align-items-center gap-3">
        {Usuario ? (
          <span className="d-flex align-items-center gap-2 me-0 me-md-5">
            <span className="d-none d-md-block">
              Usuario{Usuario?.nome?.split(" ")[0]}
            </span>
            <div className="dropdown">
              <div
                role="button"
                className="border-0"
                id="dropdownPerfil"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${Usuario.nome}&background=2b87ae&color=fff`}
                  alt={Usuario.nome}
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownPerfil">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      if (window.confirm("Tem certeza que deseja sair da sua conta?")) {
                        deletarConta(Usuario?.id);
                      }
                    }}
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </span>
        ) : (
          <div className="d-flex align-items-center gap-4">
            <Link
              to="/login"
              role="button"
              className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
            >
              <i className="bi bi-person-circle fs-3" style={{ color: "#145C73" }}></i>
              <div className="d-none d-md-flex flex-column m-0 w-50" style={{ color: "#145C73" }}>
                <span className="h6 m-0">Login cadastrar-se</span>
              </div>
            </Link>
            <i className="bi bi-telephone fs-4" style={{ color: "#145C73" }}></i>
            <i
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#carrinhoOffCanvas"
              className="bi bi-bag fs-4"
              style={{ color: "#145C73" }}
            ></i>
          </div>
        )}
        <div className="position-relative">
          {props.contadorJogos > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.contadorJogos}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
