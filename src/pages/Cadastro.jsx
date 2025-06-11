import React, { useState } from "react";

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, telefone, cpf });
    // Adicione aqui a lógica para enviar os dados ao servidor
    // Por exemplo, usando fetch ou axios para enviar os dados para uma API
    fetch("https://vetsys.somee.com/api/Users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha: password,
        telefone,
        cpf,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Redirecionar ou mostrar mensagem de sucesso
      })
      .catch((error) => {
        console.error("Error:", error);
        // Mostrar mensagem de erro
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#DBF2FE",
        backgroundImage: "url('/src/img/Cadastro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          height: "850px",
          width: "700px",
          border: "1px solid #ddd",
          backgroundColor: "#fff",
          marginLeft: "705px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#000000",
            fontFamily: "monospace",
            marginTop: "50px",
          }}
        >
          CADASTRO
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          style={{
            height: "60px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "20px",
            marginTop: "100px",
            width: "80%",
            marginLeft: "50px",
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          style={{
            height: "60px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
            width: "80%",
            marginLeft: "50px",
          }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="form-control"
          style={{
            height: "60px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
            width: "80%",
            marginLeft: "50px",
          }}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="form-control"
          style={{
            height: "60px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
            width: "80%",
            marginLeft: "50px",
          }}
        />
        <button
          type="submit"
          className="btn btn "
          style={{
            backgroundColor: "#46A2C8",
            height: "50px",
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#fff",
            borderRadius: "8px",
            width: "300px",
            marginLeft: "170px",
          }}
        >
          CADASTRAR
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          <i
            className="bi bi-facebook"
            style={{ fontSize: "40px", color: "#46A2C8" }}
          ></i>
          <i
            className="bi bi-google"
            style={{ fontSize: "40px", color: "#46A2C8" }}
          ></i>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
