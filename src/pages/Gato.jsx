import React from 'react';
import Header from '../components/Header';

export const Gato = () => {
  return (
    <div>
      <Header />
      <img 
        src="./src/img/Gato (2).png" 
        alt="Gato" 
        style={{ width: '100%', height: '1050px', display: 'block', marginBottom: '20px' }} 
      />
      <img 
        src="./src/img/GatoFim.png" 
        alt="GatoFim" 
        style={{ width: '100%', height: '1050px', display: 'block', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Gato ;
