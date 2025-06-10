import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password && email) {
      localStorage.setItem("devlogin", JSON.stringify({ password, email }));

      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FFCEE3",
        backgroundImage: "url('/src/img/Login (2).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="form-login"
        style={{
          marginLeft: "705px",
          backgroundColor: "#ffff",
          padding: "20px",
          height: "850px",
          width: "700px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            color: "black",
            marginLeft: "300px",
            fontFamily: "monospace",
            marginTop: "30px",
          }}
        >
          LOGIN
        </h2>
        <div className="mb-3" style={{ marginTop: "200px" }}>
          <label
            className="form-label"
            htmlFor="frmEmail"
            style={{
              fontFamily: "monospace",
              fontSize: "24px",
              color: "#1F2B4E",
              marginLeft: "40px",
            }}
          >
            E-MAIL
          </label>
          <input
            style={{
              marginLeft: "40px",
              width: "550px",
              height: "50px",
              backgroundColor: "#ffffff",
              borderColor: "#1F2B4E",
              color: "#1F2B4E",
              BorderRadius: "10px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="text"
            name="frmEmail"
            id="frmEmail"
          />
        </div>

        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="frmSenha"
            style={{
              fontFamily: "monospace",
              fontSize: "24px",
              color: "#1F2B4E",
              marginLeft: "40px",
            }}
          >
            SENHA
          </label>
          <input
            style={{
              marginLeft: "40px",
              width: "550px",
              height: "50px",
              backgroundColor: "#ffffff",
              borderColor: "#1F2B4E",
              borderRadius: "10px",
              color: "#1F2B4E",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            type="senha"
            name="frmSenha"
            id="frmSenha"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              className="btn btn w-50 mt-5"
              style={{
                backgroundColor: "#EE6CA4",
                height: "50px",
                fontFamily: "monospace",
                fontSize: "20px",
                color: "#ffff",
                borderRadius: "8px",
              }}
            >
              ENTRAR
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "40px", color: "#EE6CA4", cursor: "pointer" }}
                ></i>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-google"
                  style={{ fontSize: "40px", color: "#EE6CA4", cursor: "pointer" }}
                ></i>
              </a>
            </div>
            <button
              className="btn btn w-50"
              style={{
                fontFamily: "monospace",
                fontSize: "20px",
                color: "#EE6CA4",
              }}
              onClick={() => navigate("/CriarConta")}
            >
              CRIAR CONTA
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
