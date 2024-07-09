import React from 'react';
import '../Header/Header.css';
import photo5 from '../../assets/website/photo5.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={photo5} alt="Photovoltaic" />
      </div>
      <div className="header-content">
        <h1>Le photovoltaïque au juste prix, sans compromis sur la qualité</h1>
        <p>Avec les offres Sunline, vous bénéficiez du prix le plus juste pour un matériel de qualité et des garanties étendues</p>
        <button className='zez'>Je demande un RDV avec un conseiller</button>
        <div className="offers">
      <div className="h2-container">
        <h2>Nos offres pour vous</h2>
      </div>
      {/* Ajoutez ici le contenu des offres */}
    </div>
      </div>
    </div>
  );
};

export default Header;
