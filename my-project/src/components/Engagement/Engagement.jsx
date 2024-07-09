import React from 'react'
import '../Engagement/Engagement.css'
import { useNavigate } from 'react-router-dom';
const Engagement = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/allblogs');
  };
  return (
    
    
    <div>
      <div className='Contentt'>
        <h1>Chez Sunline, quand on vous dit que l’on<br></br>
        vous accompagne de A à Z : <strong class="hand-drawn">On le fait!</strong></h1>
        <p>Nous avons à cœur de vous accompagner dans chacune des étapes de votre projet d’installation<br></br>
         solaire. Grâce à notre expérience, nous serons à vos côtés dès la définition de votre projet et ce,<br></br>
         jusqu’à la mise en service de votre installation.</p>
        <ul>
            <li>Un expert conseil dédié pour répondre à<br></br>
            vos questions</li>
            <li>Un chargé des démarches administrative dédié pour suivre<br></br>
            l’avancée de votre dossier</li>
        </ul>
        <button onClick={handleButtonClick}> Nos Engagement</button>
      </div>
    </div>
  )
}

export default Engagement
