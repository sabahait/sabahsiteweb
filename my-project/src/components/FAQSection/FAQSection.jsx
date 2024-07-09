import React, { useState } from 'react';
import '../FAQSection/FAQSection.css';

const FAQSection = () => {
  const [questions, setQuestions] = useState([]);
  const [buttonText, setButtonText] = useState('Afficher les questions');
  
  const predefinedQuestions = [
    "Peut-on installer des panneaux solaires soi-même ?",
    "Quel est le prix d'une installation solaire photovoltaïque en France ?",
    "Est-il rentable d'installer des panneaux solaires ?"
  ];

  const toggleQuestions = () => {
    if (questions.length === 0) {
      setQuestions(predefinedQuestions);
      setButtonText('Fermer les questions');
    } else {
      setQuestions([]);
      setButtonText('Afficher les questions');
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <div className="icon">💬</div>
        <h2>On répond à vos <span>questions</span></h2>
      </div>
      <div className="faq-questions">
        {questions.map((question, index) => (
          <div className="faq-question" key={index}>
            <div className="question-icon">Q</div>
            <div className="question-text">{question}</div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button  class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
          onClick={toggleQuestions} 
          className={questions.length === 0 ? 'show-questions' : 'hide-questions'}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default FAQSection;
