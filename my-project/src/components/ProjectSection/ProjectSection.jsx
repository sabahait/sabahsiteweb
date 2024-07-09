import React from 'react';
import '../ProjectSection/ProjectSection.css'
import backgroundImage from '../../assets/website/Kactos.jpg'; // Remplacez par le chemin réel de l'image

const ProjectSection = () => {
    return (
        <div className="project-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <h2>Une équipe engagée dédiée à votre projet</h2>
                <p>Tout au long du projet, vous êtes accompagné par un expert en énergie solaire et un responsable des démarches administratives. Notre mission sera la réalisation de votre installation photovoltaïque.</p>
                <div className="commitments">
                    <h3>Nous nous engageons par contrat à :</h3>
                    <ul>
                        <li>Obtenir toutes les autorisations administratives nécessaires à la réalisation de votre installation</li>
                        <li>Vous fournir une installation photovoltaïque impeccable</li>
                        <li>Assurer le raccordement des panneaux solaires</li>
                        <li>Remplir la déclaration attestant de l'achèvement et de la conformité de l'installation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
