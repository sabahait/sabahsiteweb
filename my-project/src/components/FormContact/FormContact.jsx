import React, { useState } from 'react';
import '../FormContact/FormContact.css';
import ContactImage from '../../assets/website/Contact.png';

const ContactForm = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7622884f-6e00-4561-9189-b80e4d1dd7a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    commentaires: ''
  });
  
  const [charCount, setCharCount] = useState(0);
  const maxChar = 600;

  const handleChanged = (e) => {
    const { name, value } = e.target;
    if (name === 'commentaires') {
      if (value.length <= maxChar) {
        setCharCount(value.length);
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleResetForm = () => {
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      commentaires: ''
    });
    setResult("");
  };
 

  return (
    <div className="contact-form-container">
      <div className="contact-form-left">
        <img src={ContactImage} alt="Image" className="contact-form-image" />
        <div className="contact-form-info">
          <h3>Heures d'ouverture</h3>
          <p>Du lundi au vendredi<br></br> de 9h à 12h et de 14h à 18h</p>
          <h3>Siège social</h3>
          <p>14, Rue Augustin Fresnel<br></br>17180 PERIGNY</p>
          <h3>Nous suivre</h3>
          <div className="social-media-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
         
          </div>
        </div>
      </div>
      <div className="contact-form-right">
        <h2>Vous souhaitez passer au solaire ?</h2>
        <p>Nos experts se feront un plaisir de répondre à toutes vos demandes et vous fournir tous les renseignements nécessaires.</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Prénom</label>
            <input type="text" name="prenom" placeholder='entrer votre prénom' value={formData.prenom} onChange={handleChange} />
            <label>Nom</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder='entrer votre Nom'/>
          </div>
          <div className="form-group">
            <label>Email <h1>(Nécessaire)</h1></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='entrer votre email' />
          </div>
          <div className="form-group">
            <label>Commentaires <h1>(Nécessaire)</h1><p>Dites nous en plus sur votre demande.</p></label>
            <textarea name="commentaires" value={formData.commentaires} onChange={handleChanged} placeholder='entrer votre message'></textarea>
            <p>{charCount} sur {maxChar} caractères maximum</p>
            {charCount >= maxChar && <p style={{ color: 'red' }}>Vous avez atteint la limite de caractères.</p>}
          </div>
          <button type='submit' className='btn dark-btn' onClick={handleResetForm}>Submit now</button>
          
          </form>
          <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;
