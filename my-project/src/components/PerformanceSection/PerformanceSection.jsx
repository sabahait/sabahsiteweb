import React from 'react';
import '../PerformanceSection/PerformanceSection.css';
const PerformanceSection = () => {
 
  return (
    <div className="performance-section111">
      <div className="left111">
        <h2>L’offre solaire performante et flexible qui optimise votre réduction de facture</h2>
        <div className="stats111">
          <div className="stat111">
            <table>
              <tr>
                <td className='S111'><p>50% </p></td>
                <td ><p className='sa111'>max. de réduction immédiate de facture d’électricité</p></td>
              </tr>
            </table>
          </div>
          <div className="stat111">
            <table>
              <tr>
                <td><p className='S111'>3 400 kWh</p></td>
                <td><p className='sa111'>max. de production avec votre centrale solaire</p></td>
              </tr>
            </table> 
          </div>
        </div>
      </div>
      <div className="right111">
        <div className="info-box111">
          <h3>Accompagnement Zéro Tracas</h3>
          <h1>5 ans</h1>
          <p> de maintenances offerte sur votre centrale solaire</p>
        </div>
      </div>
      
    </div>
  );
};

export default PerformanceSection;
