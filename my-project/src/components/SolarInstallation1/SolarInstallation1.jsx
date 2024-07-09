import React from 'react';
import './SolarInstallation1.css';
import photo8 from '../../assets/website/photo8.png'; // Assurez-vous d'avoir une image appropriée dans ce chemin

const SolarInstallation = () => {
  return (
    <div className="solar-installation">
      <h1>Une installation solaire qui vous protège <br></br>des coupures de courant</h1>
      <p>Une centrale solaire avec une solution de stockage intégrée permettant de se prémunir des coupures de courant</p>
      <div className="content">
        <div className="image-container">
          <img src={photo8} alt="Solar Panels" />
        </div>
        <div className="text-container">
          <h2>Une sélection de Micro-Onduleur(s) solaires fiables rigoureusement choisies par nos experts en énergie</h2>
          <p>
          Grâce à la puce intelligente des micro-onduleurs Enphase IQ8HC la distribution d'électricité dans le logement peut être régulée en temps réel. En optimisant la production d'énergie, vous réduisez les coûts d'électricité.
          </p>
          <div className="warranty">
            <span>25 ans</span>
            
          </div>
          <p className='s'>garantie fabricant </p>
        </div>
      </div>
    </div>
  );
};

export default SolarInstallation;
