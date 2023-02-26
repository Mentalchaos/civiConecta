import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from 'src/assets/images/success-icon.svg';

import '../../index.css';

const TeacherType = () => {
  const [generatedLink, setGeneratedLink] = useState(false);
  const navigate = useNavigate();

  return (
    <article className="completed-survey-container">
      {!generatedLink && (
        <div className="completed-survey__text-content">
          <div className="text-content__success-message">
            <img src={successIcon} alt="Check icon" width={60} />
            <span>Has completado la encuesta con éxito</span>
          </div>
          <p className="text-content__paragraph">
            Recuerda que para obtener tu planiﬁcación personalizada es necesario conocer los intereses y <br />{' '}
            necesidades de tus estudiantes. Solo debes presionar el botón “generar enlace” y compartirlo <br /> con tus
            estudiantes.
          </p>
          <div className="text-content__actions">
            <button onClick={() => navigate('/')} type="button" className="actions__back-home">
              Volver al inicio
            </button>
            <button onClick={() => navigate('/share-survey')} type="button" className="actions__generate-link">
              Generar enlace
            </button>
          </div>
        </div>
      )}
      {/* {generatedLink && (
        <div className="survey-completion">
          <img src={successIcon} alt="Check icon" width={60} />
          <span className="completion__text">{'username'}, has completado la encuesta con éxito</span>
          <div className="completion__actions">
            <button onClick={() => navigate('/')} type="button" className="actions__button">
              Ir a la planificación personalizada
            </button>
          </div>
        </div>
      )} */}
    </article>
  );
};

export default TeacherType;
