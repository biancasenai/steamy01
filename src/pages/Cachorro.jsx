import React from 'react';
import Header from '../components/Header';

export const Cachorro = () => {
  return (
    <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <Header />
      <img 
        src="./src/img/Cachorro.png" 
        alt="Cachorro" 
        style={{ width: '100%', height: '1350px', display: 'block' }} 
      />
      <div style={{ backgroundColor: "#FFFBC7", width: '100%', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0' }}>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div style={{ 
            width: '450px', 
            height: '450px', 
            backgroundColor: '#145C73', 
            borderRadius: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' 
          }}></div>
          <div style={{ 
            width: '450px', 
            height: '450px', 
            backgroundColor: '#145C73', 
            borderRadius: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' 
          }}></div>
          <div style={{ 
            width: '450px', 
            height: '450px', 
            backgroundColor: '#145C73', 
            borderRadius: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' 
          }}></div>
          <div style={{ 
            width: '450px', 
            height: '450px', 
            backgroundColor: '#145C73', 
            borderRadius: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' 
          }}></div>
        </div>
      </div>
      <img 
        src="./src/img/CachorroFim.png" 
        alt="CachorroFim" 
        style={{ width: '100%', height: '1350px', display: 'block', margin: '10' }} 
      />
    </div>
  );
};

export default Cachorro;
