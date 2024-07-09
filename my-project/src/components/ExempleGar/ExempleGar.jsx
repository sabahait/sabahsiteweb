import React from 'react';
import './ExempleGar.css';
import photo6 from '../../assets/website/photo6.png';
import { useNavigate } from 'react-router-dom';
const ExempleGar = () => {
  const navigate = useNavigate();

  const hButtonClick = () => {
    navigate('/PageContact');
  };
  return (
    <div className="guaranteesA">
      <h1>Des garanties exclusives Sunline <br></br>pour produire sereinement son énergie solaire</h1>
      <p>
      Pendant les 5 à 10 prochaines années, votre installation solaire sur-mesure vous permettra de réduire à coup sûr votre facture<br></br> d’électricité.      </p>
      <div className="guarantees-cardsA">
        <div className="cardA">
          <h2>Garantie de réduction de facture</h2>
          <h3>Vos économies sont garanties ou remboursées</h3>
          <div className="card-contenteA">
            <h1>jusqu'a</h1>
            <h2>10 ans</h2>
            <img src={photo6} alt="" />
            <p>Pendant 10 ans, si vous ne faites pas les économies promises par notre étude, on vous rembourse la différence. Pour en savoir plus, prenez RDV avec l’un de nos experts.</p>
            <button className="button1A" onClick={hButtonClick}>Je prends RDV</button>
          </div>
        </div>
        <div className="cardeA">
          <h2>Accompagnement Zéro Tracas</h2>
          <h3>Jusqu'à</h3>
          <div className="card-contentA">
            <h2>5 ans</h2>
            <p>de maintenance offerte sur votre centrale solaire.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ExempleGar;
