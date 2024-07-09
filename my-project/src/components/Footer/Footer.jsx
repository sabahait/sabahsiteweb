import React from 'react';
import '../Footer/Footer.css'; // Assurez-vous de créer ce fichier CSS
import logo from '../../assets/website/logo2.png';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Sunline Logo" className="footer-logo" />
          <div className="footer-rating">
            <span className="stars">4.4 ★★★★★</span>
            <span className="reviews">28 avis Google</span>
          </div>
        </div>
        <div className="footer-center">
          <ul>
            <li>Qui sommes nous ?</li>
            <li>Avis clients</li>
            <li>Programme de parrainage</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li>Demande de devis Panneau Solaire</li>
            <li>Politique de données personnelles</li>
            <li>Mentions légales</li>
            <li>Nous contacter</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SUNLINE – Tous droits réservés | Mentions légales | Politique de gestion des données personnelles</p>
        <div className="footer-social">
          <a href="#"><TiSocialFacebook /></a>
          <a href="#"><TiSocialTwitter /></a>
          <a href="#"><IoLogoLinkedin /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
