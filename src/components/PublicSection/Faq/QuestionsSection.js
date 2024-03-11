import { useState } from 'react';
import Accordion from './components/Accordion';

const QuestionsSection = () => {
  const [section, setSection] = useState(0);
  const [active, setActive] = useState('Title 2')

  const questions = [
    { id: 0, text: "Pregunta general 1" },
    { id: 1, text: "Pregunta de Clases 1" },
    { id: 2, text: "Pregunta de Encuestas 1" },
    { id: 3, text: "Pregunta de Información del perfil 1" },
    { id: 4, text: "Pregunta de Nómina y curso 1" },
    { id: 5, text: "Pregunta de Informe de resultados 1" },
    { id: 6, text: "Pregunta de Contacto 1" }
  ];

  const filteredQuestions = questions.filter(question => question.id === section);

  return (
    <div className='questions-section-container'>
      <div className='questions-left-menu'>
        <p onClick={() => setSection(0)}>General</p>
        <p onClick={() => setSection(1)}>Clases</p>
        <p onClick={() => setSection(2)}>Encuestas</p>
        <p onClick={() => setSection(3)}>Información del Perfil</p>
        <p onClick={() => setSection(4)}>Nómina y curso</p>
        <p onClick={() => setSection(5)}>Informe de resultados</p>
        <p onClick={() => setSection(6)}>Contacto</p>
      </div>
      <div>
        {filteredQuestions.length > 0 ? (
          <div>
            {filteredQuestions.map((question) => (
              <Accordion 
                active={active}
                setActive={setActive}
                question={question.text}
                key={question.text} />
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