import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cookie from 'src/utils/cookie';
import successIcon from 'src/assets/images/success-icon.svg';
import successIconStudent from 'src/assets/Icons/student-survey-completed.svg';

import '../index.css';

const CompletedSurvey = ({ type }) => {
  const [generatedLink, setGeneratedLink] = useState(false);
  const navigate = useNavigate();
  const cookies = cookie.getCookie('token');
  const { name } = cookies !== undefined && JSON.parse(cookies);

  const isTeacher = type === 'teacher';

  useEffect(() => {
    setGeneratedLink(false);
  }, []);

  return (
    <>
      <article className={`completed-survey-container ${type}`}>
        {!generatedLink && (
          <div className="completed-survey__text-content">
            <div className={`text-content__success-message ${type}`}>
              {isTeacher ? (
                <>
                  <img src={successIcon} alt="Check icon" width={60} />
                  <span>Has completado la encuesta con éxito</span>
                </>
              ) : (
                <>
                  <img src={successIconStudent} alt="Check icon" width={60} />
                  <span>Nombre estudiante, gracias por compartir tu opinión.</span>
                </>
              )}
            </div>
            {isTeacher ? (
              <p className="text-content__paragraph">
                Recuerda que para obtener tu planiﬁcación personalizada es necesario conocer los intereses y <br />{' '}
                necesidades de tus estudiantes. Solo debes presionar el botón “generar enlace” y compartirlo <br /> con
                tus estudiantes.
              </p>
            ) : (
              <p className="text-content__paragraph">Ya puedes cerrar esta ventana</p>
            )}

            {isTeacher && (
              <div className="text-content__actions">
                <button onClick={() => navigate('/')} type="button" className="actions__back-home">
                  Volver al inicio
                </button>
                <button onClick={() => setGeneratedLink(true)} type="button" className="actions__generate-link">
                  Generar enlace
                </button>
              </div>
            )}
          </div>
        )}
        {generatedLink && (
          <div className="survey-completion">
            <img src={successIcon} alt="Check icon" width={60} />
            <span className="completion__text">{name}, has completado la encuesta con éxito</span>
            <div className="completion__actions">
              <button onClick={() => navigate('/')} type="button" className="actions__button">
                Ir a la planificación personalizada
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default CompletedSurvey;
