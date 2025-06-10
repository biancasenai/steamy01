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
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#EE6CA4" }}>Cadastro</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          style={{
            height: "40px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          style={{
            height: "40px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="form-control"
          style={{
            height: "40px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="form-control"
          style={{
            height: "40px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        />
        <button
          type="submit"
          className="btn btn w-100"
          style={{
            backgroundColor: "#EE6CA4",
            height: "40px",
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
