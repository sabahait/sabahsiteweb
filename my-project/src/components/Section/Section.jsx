import React from 'react';
import '../Section/Section.css';
import ps1 from '../../assets/website/icon1.jpg';
import ps2 from '../../assets/website/icon2.jpg';
import ps3 from '../../assets/website/icon3.jpg';
import { useNavigate } from 'react-router-dom';

const Section = () => {
  const navigate = useNavigate();

  const ButtonClick = () => {
    navigate('/Vuepage');
  };
  return (
    <div className="section">
         <h1>Reposez-vous sur notre expertise</h1>
      <div className="container">
        <div className="item">
          <div className="icon"><img src={ps1} alt="" /></div>
          <div className="line-container">
        <div className="line"></div>
        <div className="number number-1">1</div>
      </div>
          <h3>Dimensionnement</h3>
          <p>
          &gt;&gt;Nous prenons en compte la surface, l'inclinaison et l'ensoleillement de votre toiture, ainsi que votre consommation d'électricité pour calculer le nombre optimal de panneaux pour votre toit.
          </p>
        </div>
        <div className="item">
          <div className="icon"><img src={ps2} alt="" /></div>
          <div className="line-container">
        <div className="line"></div>
        <div className="number number-2">2</div>
      </div>
          <h3>Rentabilité</h3>
          <p>
          &gt;&gt;Avec notre étude, évaluez avec précision la rentabilité de vos panneaux solaires, garantis pendant 30 ans. Une fois votre installation amortie, vous profitez d'une source d'énergie gratuite et durable.
          </p>
        </div>
        <div className="item">
          <div className="icon"><img src={ps3} alt="" /></div>
          <div className="line-container">
        <div className="line"></div>
        <div className="number number-3">3</div>
        </div>
          <h3>Un conseiller aux petits soins</h3>
          <p>
          &gt;&gt;Un expert solaire Sunline vous accompagne du début à la fin de votre projet : dimensionnement, démarches administratives et suivi de votre installation, pendant toute sa vie de production. À vous le soleil !
          </p>
        </div>
      </div>
      
      <button className="cta-buttonn" onClick={ButtonClick}>Demander un devis personnalisé &gt;&gt;</button>
    </div>
  );
};

export default Section;
