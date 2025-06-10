import React from 'react';
import Header from '../components/Header';

export const Aves = () => {
  return (
    <div>
      <Header />
      <img 
        src="./src/img/Aves.png" 
        alt="Aves" 
        style={{ width: '100%', height: '1050px', display: 'block', marginBottom: '20px' }} 
      />     
      <img 
        src="./src/img/Avesfim.png" 
        alt="AvesFim" 
        style={{ width: '100%', height: '1050px', display: 'block', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Aves;
