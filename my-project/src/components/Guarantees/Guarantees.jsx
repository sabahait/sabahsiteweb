import React from 'react';
import './Guarantees.css';
import photo6 from '../../assets/website/photo6.png';

const Guarantees = () => {
  return (
    <div className="guarantees">
      <h1>Des garanties exclusives Sunline <br></br>pour produire sereinement son énergie solaire</h1>
      <p>
        Quoiqu'il se passe pendant les 5 à 10 prochaines années, votre installation solaire sera réparée sans aucun frais et réduira votre facture <br></br>d'électricité.
      </p>
      <div className="guarantees-cards">
        <div className="card">
          <h2>Garantie de réduction de <br></br>facture</h2>
          <h3>Vos économies sont garanties<br></br> ou<br></br> remboursées</h3>
          <div className="card-contente">
            <h2>10 ans</h2>
            <img src={photo6} alt="" />
            <p>Pendant 10 ans, si vous ne faites pas les économies promises par notre étude, on <br></br>vous <br></br>rembourse la différence.</p>
          </div>
        </div>
        <div className="carde">
          <h2>Accompagnement Zéro Tracas</h2>
          <h3>Jusqu'à</h3>
          <div className="card-content">
            <h2>5 ans</h2>
            <p>de maintenance offerte sur votre centrale solaire.</p>
          </div>
        </div>
      </div>
      <button className="btn">Nos garanties </button>
    </div>
  );
};

export default Guarantees;
