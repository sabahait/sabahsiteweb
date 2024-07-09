import React from 'react'
import '../Photochp/Photochp.css'
import fb from '../../assets/website/ssp.jpg'
const Photochp = () => {
  return (
    <div className="guarantees-section">
      <img className="background-image" src={fb} alt="Solar Panels" />
      <div className="overlay">
        <h2>Profitez de garanties complémentaires exclusives Sunline</h2>
        <div className="guarantees-container">
          <div className="guarantee-card">
            <h3>Jusqu'à 5 ans de maintenance pour votre centrale solaire</h3>
            <p>Nous vous offrons la maintenance de votre installation pendant 5 ans, nos techniciens se déplacent une fois par an pour la nettoyer et vérifier.</p>
          </div>
          <div className="guarantee-card highlighted">
            <h3>Jusqu'à 10 ans de garantie de réduction de facture Satisfait ou Remboursé</h3>
            <p>Nous vous remboursons la différence si vous ne faites pas les économies annoncées lors de l'étude d'une offre sur-mesure.</p>
          </div>
          <div className="guarantee-card">
            <h3>Garantie décennale contre tout dommage à votre maison</h3>
            <p>Vous êtes intégralement couvert en cas de dommage compromettant la solidité du bâti ou le rendant inhabitable ou impropre à son usage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photochp
