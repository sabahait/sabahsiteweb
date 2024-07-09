import React from 'react';
import '../TechniciansSection/TechniciansSection.css';
import solarImage from '../../assets/website/Photo23.png'; // Remplacez par le chemin réel de l'image
import Photo24 from '../../assets/website/Photo24.png';
import Photo25 from '../../assets/website/Photo25.png';
import Photo26 from '../../assets/website/Photo26.png';

const TechniciansSection = () => {
    return (
        <div className="technicians-section1">
            <table>
                <tr>
                    <td>
                    <div className="header1">
                <h2>Des techniciens agréés audités et évalués après chaque intervention</h2>
                <p>Nos techniciens locaux agréés interviennent partout en Nouvelle-Aquitaine, avec les meilleures garanties de prestation de pose.</p>
            </div>
                    </td>
                    <td>
                    <div className="image-container1">
                          <img src={solarImage} alt="Techniciens installant des panneaux solaires" />
                   </div>
                    </td>
                </tr>
            </table>
         
           
            <div className="features1">
            <div className="feature1">
                    <img src={Photo24}alt="" className='image1'/>
                    <h3 className='H3q'>Certification RGE</h3>
                    <p className='p1'>Tous nos techniciens détiennent la certification<br></br> RGE afin de vous faire bénéficier des aides<br></br> d’Etat 
et de vous offrir la meilleure <br></br>qualité de pose possible</p>
                </div>
                <div className="feature1">
                    <img src={Photo25} alt="" className='image2' />
                    <h3 >Assurance décennale</h3>
                    <p  className='p2'>Pendant les 10 années suivant l’installation, seront<br></br>  réparés tous dommages qui n’étaient pas décelables  <br></br>lors de la réception des travaux et qui compromettraient<br></br> la solidité du bâti ou qui le rendraient inhabitable <br></br> ou impropre à son usage</p>
                </div>
                <div className="feature1">
                    <img src={Photo26} alt="" className='image3' />
                    <h3>Visites de contrôle</h3>
                    <p  className='p3'>Nos équipes contrôlent aléatoirement la qualité<br></br> des installations réalisées et interrogent systématiquement<br></br> les clients 1 mois après la mise en service pour connaître<br></br> leur satisfaction.</p>
                </div>
            </div>
        </div>
    );
}

export default TechniciansSection;
