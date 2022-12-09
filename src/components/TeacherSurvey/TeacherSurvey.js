import { useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from './Categories/Categories';
import teacherImage from '../../assets/images/teacher-banner.png';
import './TeacherSurvey.css';
import Question from '../Question/Question';

const TeacherSurvey = () => {
  const surveyCategories = [
    {
      title: 'Relaciones interpersonales',
      detail: '0 Preguntas en esta categoría',
    },
    {
      title: 'Resolución de conflictos',
      detail: '0 Preguntas en esta categoría',
    },
    {
      title: 'Bienestar y autocuidado',
      detail: '0 Preguntas en esta categoría',
    },
    {
      title: 'Prevención consumo drogas y alcohol',
      detail: '0 Preguntas en esta categoría',
    },
  ];

  const [state, setState] = useState(surveyCategories);
  const [isSurveyVisible, setSurveyVisibility] = useState(false);

  return (
    <>
      <SectionsHeader image={teacherImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta del docente</span>
          </div>
        </div>

        {isSurveyVisible ? (
          <Question />
        ) : (
          <div className="categories-container">
            {surveyCategories.map(item => {
              return (
                <Categories
                  title={item.title}
                  detail={item.detail}
                  key={item.title}
                  onclick={() => setSurveyVisibility(true)}
                />
              );
            })}
          </div>
        )}
      </main>
      {state.length < 4 && (
        <div className="button-container teacher-survey">
          <button className="add-button">
            <p className="add-button-icon">+</p>
            <p className="add-button-text">Añadir Categoría</p>
          </button>
        </div>
      )}
    </>
  );
};

export default TeacherSurvey;
