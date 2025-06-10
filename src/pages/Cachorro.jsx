import React from 'react';
import Header from '../components/Header';

export const Cachorro = () => {
  return (
    <div>
      <Header />
      <img 
        src="./src/img/Cachorro.png" 
        alt="Cachorro" 
        style={{ width: '100%', height: '1050px', display: 'block', marginBottom: '20px' }} 
      />
      <img 
        src="./src/img/CachorroFim.png" 
        alt="CachorroFim" 
        style={{ width: '100%', height: '1050px', display: 'block', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Cachorro;
