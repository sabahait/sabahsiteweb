import React from 'react';
import Selaire1 from '../../assets/website/Solaire1.png'
const ClientsSection = () => {
  return (
    <section className="flex items-center justify-center py-16 px-8">
      <div className="flex flex-col md:flex-row items-center container mx-auto">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={Selaire1} alt="Solar Panels" className="object-cover w-full h-full" />
        </div>
        
        {/* Text */}
        <div className="md:w-1/2 md:pl-12 text-black">
          <h2 className="text-4xl font-bold mb-4">
            300 clients heureux d'être devenus producteurs d’énergie
          </h2>
          <p className="text-lg">
            Depuis 2019, Sunine s’est engagé à faire profiter sans risque à tous du meilleur de la technologie solaire, 
            pour la production d'énergie locale et en circuit court. Nous remercions nos 3000 clients de leur confiance !
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
