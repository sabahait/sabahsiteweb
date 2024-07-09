import React from 'react';
import '../Gar-Footer/Gar-Footer.css'; // Assurez-vous de créer un fichier CSS pour les styles
import Photo22 from '../../assets/website/Photo22.jpg'
import { useNavigate } from 'react-router-dom';
const GarFooter = () => {
    const navigate = useNavigate();

    const handlButtonc = () => {
      navigate('/PageContact');
    };
    return (
        <div className="section-container1">
            <div className="image-container1">
                <img src={Photo22} alt="Solar panels" />
            </div>
            <div className="content-container1">
                <h2>Des garanties uniques <br></br>& des engagements forts</h2>
                <p>Afin de vous assurer une sérénité de plus d’un demi-siècle, vous bénéficiez de garanties inédites et exclusives Solifin pour votre installation et en mesure de panneaux solaires ou autoconsommation</p>
                <button onClick={handlButtonc}>Je demande du RGE avec un conseiller</button>
            </div>
        </div>
    );
}

export default GarFooter;
