import React from 'react';
import Header from '../components/Header';

export const Roedores = () => {
  return (
    <div>
      <Header />
      <img 
        src="./src/img/Roedores.png" 
        alt="Roedores" 
        style={{ width: '100%', height: '1050px', display: 'block', marginBottom: '20px' }} 
      />
      <img 
        src="./src/img/RoedoresFim.png" 
        alt="RoedoresFim" 
        style={{ width: '100%', height: '1050px', display: 'block', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Roedores;
