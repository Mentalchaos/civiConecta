import { useState } from 'react';
import Accordion from './components/Accordion';
import faqQuestions from './faqQuestions';
import brain from 'src/assets/Icons/heart-brain.svg';
import './Faq.css';

const QuestionsSection = () => {
  const [section, setSection] = useState(-1);

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

  const handleChange = (event) => {
    setSection(parseInt(event.target.value));
  };

  return (
    <div className='questions-mobile-container'>
      <div className='questions-mobile-dropdown'>
        <select value={section} onChange={handleChange} className='questions-mobile-options'>
          <option value={-1}>General</option>
          {sectionTitles.map((title, index) => (
            <option key={index} value={index}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div style={{ width: "68%" }}>
        {section >= 0 ? (
          faqQuestions[section].length > 0 ? (
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
          )
        ) : (
          <p>Selecciona una categoría para filtrar las preguntas más comunes.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsSection;
