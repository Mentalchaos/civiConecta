import { useState } from 'react';
import Accordion from './components/Accordion';
import brain from 'src/assets/Icons/heart-brain.svg';
import './Faq.css';

const QuestionsSection = ({ faqQuestions, filter = false, inputValue }) => {
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
        {faqQuestions[section]?.length > 0 && (filter != true) ? (
          <div style={{ width: "100%" }}>
            {faqQuestions && faqQuestions[section]?.map((question) => (
              <Accordion
                inputValue={inputValue}
                question={question.pregunta}
                answer={question.respuesta}
                key={question.pregunta} />
            ))}
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            {faqQuestions && filter && faqQuestions?.map((question) => (
              <Accordion
                inputValue={inputValue}
                question={question.pregunta}
                answer={question.respuesta}
                key={question.pregunta} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsSection;
