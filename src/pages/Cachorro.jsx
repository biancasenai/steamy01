import React from "react";
import Header from "../components/Header";

export const Cachorro = () => {
  return (
    <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
      <Header />
      <img
        src="./src/img/imgcatioro.png"
        alt="Cachorro"
        style={{ width: "2520px", height: "1300px", display: "block" }}
      />
      <div
        style={{
          backgroundColor: "#FFFBC7",
          width: "100%",
          height: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
        }}
      >
        <div className="d-flex justify-content-center align-items-center gap-5">
          {/* Quadrado 1 */}
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#C9FBFF",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites do quadrado
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center", // Centraliza a imagem verticalmente
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
            }}
          >
            <img
              src="./src/img/botaocachorro1.png"
              alt="Botão Cachorro 1"
              style={{
                width: "100%", // Reduzi a largura da imagem para 80% do quadrado
                height: "80%", // Reduzi a altura da imagem para 80% do quadrado
                objectFit: "contain", // Garante que a imagem seja ajustada sem cortar
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#856200", // Cor do texto
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Petisco
            </p>
          </div>

          {/* Quadrado 2 */}
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#FFD9AD",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
            }}
          >
            <img
              src="./src/img/botaocachorro2.png"
              alt="Botão Cachorro 2"
              style={{
                width: "70%",
                height: "70%",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "80px",
                color: "#856200", // Cor do texto
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Ração
            </p>
          </div>

          {/* Quadrado 3 */}
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#C7D8FF",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
            }}
          >
            <img
              src="./src/img/botaocachorro3.png"
              alt="Botão Cachorro 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#856200", // Cor do texto
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Brinquedos
            </p>
          </div>

          {/* Quadrado 4 */}
          <div
            style={{
              width: "450px",
              height: "450px",
              backgroundColor: "#FEC5FF",
              borderRadius: "20px",
              overflow: "hidden", // Garante que a imagem não ultrapasse os limites
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
            }}
          >
            <img
              src="./src/img/botaocachorro4.png"
              alt="Botão Cachorro 4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#856200", // Cor do texto
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Acessórios
            </p>
          </div>
        </div>
      </div>
      <img
        src="./src/img/CachorroFim.png"
        alt="CachorroFim"
        style={{
          width: "100%", // Ajusta a largura para ocupar toda a tela
          height: "auto", // Mantém a proporção da imagem
          display: "block",
          margin: "0 auto", // Centraliza a imagem horizontalmente
        }}
      />
      <div
        style={{
          backgroundColor: "#FFD2E1", // Fundo de cor
          width: "100%",
          padding: "20px 0", // Espaçamento interno
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", // Permite que os quadrados fiquem em várias linhas, se necessário
          gap: "20px", // Espaçamento entre os quadrados
        }}
      >
        {/* Quadrado 1 */}
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px", // Espaçamento interno
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#856200",
              marginBottom: "10px",
            }}
          >
            Nome: Ração Premium
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#856200",
              marginBottom: "10px",
            }}
          >
            Marca: PetFood
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#856200",
              marginBottom: "20px",
            }}
          >
            Peso: 10kg
          </p>
          <button
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#7FB0CB",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra ao botão
            }}
            onClick={() => console.log("Adicionado ao carrinho")}
          >
            Adicionar
          </button>
        </div>

        {/* Replicando o mesmo layout para os outros quadrados */}
        {[2, 3, 4, 5].map((item) => (
          <div
            key={item}
            style={{
              width: "300px",
              height: "400px",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra no quadrado
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px", // Espaçamento interno
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#856200",
                marginBottom: "10px",
              }}
            >
              Nome: Produto {item}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#856200",
                marginBottom: "10px",
              }}
            >
              Marca: Marca {item}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#856200",
                marginBottom: "20px",
              }}
            >
              Peso: {item * 2}kg
            </p>
            <button
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "#7FB0CB",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adiciona sombra ao botão
              }}
              onClick={() =>
                console.log(`Produto ${item} adicionado ao carrinho`)
              }
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cachorro;
