import { useEffect, useState } from 'react';
import arrowBack from 'src/assets/Icons/back.svg';
import Surveys from './Surveys/Surveys';
import Footer from 'src/components/PublicSection/Footer/index';
import planificationImage from 'src/assets/images/professorSurvey.jpg';
import './index.css';

const ProfessorSurvey = () => {
  const [isStartSurvey, setIsStartSurvey] = useState(false);

  useEffect(() => {
    setIsStartSurvey(false);
  }, []);

  return (
    <>
      <main className="survey-content-container">
        <div className="content-start__back-link">
          <img src={arrowBack} alt="Arrow" />
          <a href="/">Volver</a>
        </div>
        {!isStartSurvey && (
          <section className="survey-content__start">
            <img className="content-start__image" alt="planification image" src={planificationImage} />

            <article className="content-start__suggestions">
              <header className="content-start__header-text">Planificaci&oacute;n adecuada</header>
              <p className="content-start__text">
                Te sugerimos que, si no conoces la realidad del curso, completes esta encuesta considerando la
                opini&oacute;n del profesor o profesora jefe anterior, u otros colegas que tengan experiencia con el
                grupo de estudiantes.
              </p>
              <div className="content-start__important-section">
                <span className="important">La encuesta consta de 16 preguntas.</span>
                <p className="important-text">
                  Es importante que contestes con calma y sinceridad respecto a tu percepción del curso, ya que te
                  permitirá obtener una planiﬁcación acorde con sus necesidades.
                </p>
              </div>
              <div style={{ textAlign: 'right', marginTop: 40 }}>
                <button onClick={() => setIsStartSurvey(true)} className="survey-start-button" type="button">
                  Iniciar la encuesta
                </button>
              </div>
            </article>
          </section>
        )}

        {isStartSurvey && <Surveys />}
      </main>

      <div style={{ padding: '0 2.4em' }}>
        <Footer />
      </div>
    </>
  );
};

export default ProfessorSurvey;
