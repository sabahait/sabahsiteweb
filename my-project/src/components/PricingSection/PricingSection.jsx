import React from 'react';
import productImage from '../../assets/website/photo2.jpg'; // Adjust the path to your image
import { useNavigate } from 'react-router-dom';

const PricingCard = ({ title, price, description, imageSrc, features, buttonLabel, onClick, optionalFeatures }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-82">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-2xl font-bold mt-2">{price}</p>
    <p className="text-sm text-gray-500">{description}</p>
    <img src={imageSrc} alt={title} className="my-4 mx-auto" />
    <button
      className="bg-orange-500 hover:bg-gray-600 text-black py-2 px-4 rounded-full mt-4"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
    <ul className="ghostwhite py-12 text-left mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-green-500">&#10003;</span>
          <p>{feature}</p>
        </li>
      ))}
    </ul>
    {optionalFeatures && optionalFeatures.length > 0 && (
      <>
        <h3 className="text-lg font-semibold mt-6">Options disponibles sur demande</h3>
        <ul className="text-left mt-2 space-y-2">
          {optionalFeatures.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-gray-500">&#10004;</span>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

const PricingSection = () => {
  const navigate = useNavigate();

  const handleSunEcoClick = () => {
    navigate('/PagesSuneco');
  };

  const handleSunPrimeClick = () => {
    navigate('/PageSunPrime');
  };

  const cardsData = [
    {
      title: 'SunEco',
      price: 'A partir de 5 990 €',
      description: 'Le solaire abordable, performant et intelligent, repliable et esthétique, avec une ombrière.',
      imageSrc: productImage,
      features: [
        'Panneaux solaires de dernière génération',
        'Micro-onduleur(s)',
        'Suivi de production',
        'Suivi de consommation',
        'Optimisation de production en cas dombrage',
        'Optimisation des consommation en fonction de la production',
      ],
      buttonLabel: "Découvrir l'offre",
      onClick: handleSunEcoClick,
      optionalFeatures: [
        'Module de pilotage du ballon d’eau chaude ou Borne de recharge pour véhicule électrique',
      ],
    },
    {
      title: 'SunPrime',
      price: 'A partir de 10 430 €',
      description: 'Le solaire de dernière génération garantie 3D, à performances exceptionnelles et au design élégant.',
      imageSrc: productImage,
      features: [
        'Panneaux solaires ultra performants de dernière génération',
        'Micro-onduleur(s) à haut rendement',
        'Suivi de production',
        'Suivi de consommation',
        'Optimisation de production en cas dombrage',
        'Optimisation des consommations en fonction de la production',
        'Module de pilotage du ballon deau chaude ou Borne de recharge pour véhicule électrique',
      ],
      buttonLabel: "Découvrir l'offre",
      onClick: handleSunPrimeClick,
      // No optionalFeatures here
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 flex justify-center space-x-8">
        {cardsData.map((card, index) => (
          <PricingCard
            key={index}
            title={card.title}
            price={card.price}
            description={card.description}
            imageSrc={card.imageSrc}
            features={card.features}
            buttonLabel={card.buttonLabel}
            onClick={card.onClick}
            optionalFeatures={card.optionalFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
