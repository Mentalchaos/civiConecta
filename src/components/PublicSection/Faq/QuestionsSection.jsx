import { useState } from 'react';
import Accordion from './components/Accordion';
import faqQuestions from './faqQuestions';
import brain from 'src/assets/Icons/heart-brain.svg';
import './Faq.css';

const QuestionsSection = () => {
  const [section, setSection] = useState(0);

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

  return (
    <div className='questions-section-container'>
      <div className='questions-left-menu'>
        {
          sectionTitles.map((title, index) => 
            <div key={index} className='left-menu-item' onClick={() => setSection(index)}>
              <img src={brain} style={{ width: "18%", visibility: section === index ? 'visible' : 'hidden' }} />
              <p className={`left-menu-title ${section === index ? 'selected' : ''}`}>{title}</p>
            </div>
          )
        }
      </div>
      <div style={{ width: "68%" }}>
        {faqQuestions[section].length > 0 ? (
          <div style={{ width: "100%" }}>
            {faqQuestions[section].map((question) => (
              <Accordion
                question={question.pregunta}
                answer={question.respuesta}
                key={question.pregunta} />
            ))}
          </div>
        ) : (
          <p>No hay preguntas para esta sección.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsSection;