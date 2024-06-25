import { useState } from 'react';
import Accordion from './components/Accordion';
import faqQuestions from './faqQuestions';
import brain from 'src/assets/Icons/heart-brain.svg';
import arrow from 'src/assets/Icons/thin-right-purple.svg';
import './QuestionsMobile.css';

const QuestionsSection = () => {
  const [section, setSection] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const sectionTitles = [
    "Clases",
    "Encuestas",
    "Información del Perfil",
    "Nómina y curso",
    "Informe de resultados",
    "Contacto",
    "Servicio",
    "Soporte"
  ];

  const handleSelect = (index) => {
    setSection(index);
    setIsOpen(false);
  };

  return (
    <div className='questions-mobile-container'> 
      <p className='category-message'>Selecciona una categoría para filtrar las preguntas más comunes.</p>
      <div className='questions-mobile-dropdown'>
        <div
          className='questions-mobile-selected'
          onClick={() => setIsOpen(!isOpen)}
        >
          <img style={{width: '30px'}} src={section === -1 ? brain : arrow} alt="" />
          {section === -1 ? 'General' : sectionTitles[section]}
        </div>
        
        {isOpen && (
          <ul className='questions-mobile-list'>
            <li onClick={() => handleSelect(-1)}>
              <img style={{width: '30px'}} src={brain} alt="Brain" />
              General
            </li>
            {sectionTitles.map((title, index) => (
              <li key={index} onClick={() => handleSelect(index)}>
                <img style={{width: '30px'}} src={arrow} alt="Arrow" />
                {title}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div style={{ width: "90%" }}>
        {section >= 0 && faqQuestions[section].length > 0 && (
          <div style={{ width: "100%" }}>
            {faqQuestions[section].map((question) => (
              <Accordion
                question={question.pregunta}
                answer={question.respuesta}
                key={question.pregunta}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsSection;
