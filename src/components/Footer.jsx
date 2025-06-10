import React from "react";

const Footer = () => {
  return (
    <footer 
      className="text-center py-3 mt-6" 
      style={{ fontFamily: "Irish Grover", fontSize: "40px", backgroundColor: "#9CD1EE", color: "#004866", position: "relative" }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: "100px", marginRight: "100px" }}>
        <img 
          src="./src/img/logo.png" 
          alt="Logo" 
          style={{ height: "190px", marginRight: "20px" }} 
        />

        <div style={{ textAlign: "left" }}>
          <p className="mb-0" style={{ fontSize: "60px", marginBottom: "20px" }}>
            pet friendly
          </p>
          <p className="mb-0" style={{ fontSize: "40px" }}>
            entrar em contato blog
          </p>
        </div>

        <p 
          className="mb-0" 
          style={{ fontSize: "40px", textAlign: "right", marginLeft: "auto", marginRight: "-350px" }}
        >
          nossas redes sociais
        </p>
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "flex-end", 
            gap: "20px", 
            marginTop: "150px" 
          }}
        >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i
              className="bi bi-facebook"
              style={{ fontSize: "40px", color: "#46A2C8", cursor: "pointer" }}
            ></i>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i
              className="bi bi-google"
              style={{ fontSize: "40px", color: "#46A2C8", cursor: "pointer" }}
            ></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i
              className="bi bi-instagram"
              style={{ fontSize: "40px", color: "#46A2C8", cursor: "pointer" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;