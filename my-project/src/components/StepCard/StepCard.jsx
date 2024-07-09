// src/components/StepSection.js
import React from 'react';
import Photo16 from '../../assets/website/Photo16.jpg';
import Photo17 from '../../assets/website/Photo20.jpg';
import Photo18 from '../../assets/website/Photo19.jpg';
import './StepCard.css'
const steps = [
  {
    number: 1,
    title: 'Votre devis solaire en 48 heures chrono',
    description: 'Votre expert solaire dédié vous conseille et dimensionne votre centrale solaire pour vous proposer le prix le plus juste par rapport à vos besoins.',
    imageUrl:Photo16
  },
  {
    number: 2,
    title: 'Démarches administratives',
    description: 'Notre équipe administrative se charge de demander les autorisations administratives nécessaires à la réalisation de votre projet solaire.',
    imageUrl:Photo17
  },
  {
    number: 3,
    title: 'Installation & Raccordement au réseau public',
    description: 'Nous faisons réaliser vos travaux par l’un de nos techniciens locaux RGE agréé, pour vous garantir une installation de qualité.',
    imageUrl:Photo18
  }
];

const StepSection = () => {
  return (
    <div className="step-section">
      {steps.map(step => (
        <div key={step.number} className="step-card">
          <img src={step.imageUrl} alt={`Step ${step.number}`} className="step-image" />
          <div className="step-content">
            <h3>Etape {step.number}</h3>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepSection;
