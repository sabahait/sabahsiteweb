import React from 'react';
import './SolarInstallation.css';
import solarPanelImage from '../../assets/website/photo7.png'; // Assurez-vous d'avoir une image appropriée dans ce chemin

const SolarInstallation = () => {
  return (
    <div className="solar-installationn">
      <h1>Une installation solaire avec les meilleurs produits, <br></br>la clef de la rentabilité de votre investissement</h1>
      <p>D'un seul doigt, pilotez vos équipements énergivores, suivez votre consommation d'énergie et optimisez votre production solaire d'énergie</p>
      <div className="contentt">
        <div className="imaged-container">
          <img src={solarPanelImage} alt="Solar Panels" />
        </div>
        <div className="text-containeres">
          <h2>Des panneaux photovoltaïques dernière génération assemblé en France</h2>
          <p>
            Le panneau solaire FLASH Half-Cut Black de DualSun est conçu pour des projets d'autoconsommation sans compromis sur l'esthétisme afin de conserver toute l'élégance du bâtiment. Un panneau photovoltaïque à haut rendement et bas carbone. Dans des sites ultramodernes et en étant attentifs à tout, il est soumis à un cahier des charges conçu en Provence par des ingénieurs experts.
          </p>
          <div className="warranty">
            <span>30 ans</span>
            
          </div>
          <div><p >de garantie fabricant</p></div>
          
        </div>
      </div>
    </div>
  );
};

export default SolarInstallation;
