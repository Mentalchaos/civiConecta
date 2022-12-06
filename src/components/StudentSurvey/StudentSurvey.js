import { useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from '../TeacherSurvey/Categories/Categories';
import studentImage from '../../assets/images/student-image.png';
import './StudentSurvey.css';

const StudentSurvey = () => {
  const surveyCategories = [
    {
      title: 'Relaciones interpersonales',
      detail: '0 Preguntas en esta categoría'
    },
    {
      title: 'Resolución de conflictos',
      detail: '0 Preguntas en esta categoría'
    },
    {
      title: 'Bienestar y autocuidado',
      detail: '0 Preguntas en esta categoría'
    },
    {
      title: 'Prevención consumo drogas y alcohol',
      detail: '0 Preguntas en esta categoría'
    }
  ];

  const [state, setState] = useState(surveyCategories);

  return (
    <>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al estudiante</span>
          </div>
        </div>
        <div className="categories-container">
          {surveyCategories.map(item => {
            return (
              <Categories
                type={'student'}
                title={item.title}
                detail={item.detail}
                key={item.title}
              />
            );
          })}
        </div>
      </main>
      {state.length < 4 &&
        <div className='button-container'>
          <button className='add-button'>
            <p className='add-button-icon'>+</p>
            <p className='add-button-text'>Añadir Categoría</p>
          </button>
        </div>
      }
    </>
  );
};

export default StudentSurvey;
