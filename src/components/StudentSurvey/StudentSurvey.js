import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'src/components/UI/Spinner';
import Visible from 'src/components/UI/Visible';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from '../TeacherSurvey/Categories/Categories';
import Question from '../Question/Question';
import ModalAddStudentSurvey from './components/ModalAddStudentSurvey';
import ModalDeleteStudentSurvey from './components/ModalDeleteStudentSurvey';
import useStudentSurvey from './hooks/useStudentSurvey';
import { StudentSurveyContext } from './context';
import studentImage from '../../assets/images/student-image.png';
import './StudentSurvey.css';

const StudentSurvey = () => {
  const navigate = useNavigate();
  const { states, setters, actions } = useStudentSurvey();

  const handleEditCategory = (topicId) => () => {
    navigate(`${topicId}/questions`);
  };

  return (
    <Fragment>
      <StudentSurveyContext.Provider value={{ states, setters, actions }}>
        <SectionsHeader image={studentImage} />
        <main className="main-content">
          <div className="header">
            <div>
              <span className="section-title">Encuesta al estudiante</span>
            </div>
          </div>

          {/* <Visible condition={states.isSurveyVisible}>
            <Question
              type="Student"
              title={states.title}
              surveys={states.surveys}
              selectedTopic={states.selectedTopic}
            />
          </Visible> */}

          <div className="categories-container">
            <Visible condition={states.fetching}>
              <div className="spinner-wrapper">
                <Spinner />
              </div>
            </Visible>
            <Visible condition={!states.fetching}>
              {states.topics.map(item => {
                return (
                  <Categories
                    type="student"
                    title={item.title}
                    detail={item.detail}
                    key={`topic-${item.id}`}
                    onClick={handleEditCategory(item.id)}
                  />
                );
              })}
            </Visible>
          </div>

          <div className="buttons-container-fetch">
            <Visible condition={states.isAbleToAddCategories}>
              <div className="button-container teacher-survey category-button">
                <button className="add-button" onClick={() => setters.setModal(true)}>
                  <p className="add-button-icon">+</p>
                  <p className="add-button-text">Añadir Categoría</p>
                </button>
              </div>
            </Visible>

            <Visible condition={!states.isAbleToAddCategories}>
              <div className="button-container teacher-survey category-button">
                <button className="add-button" onClick={() => setters.setRemoveTopicModal(true)}>
                  <p className="add-button-icon">-</p>
                  <p className="add-button-text">Eliminar categor&iacute;a</p>
                </button>
              </div>
            </Visible>
          </div>
        </main>

        <Visible condition={states.showModal}>
          <ModalAddStudentSurvey />
        </Visible>

        <Visible condition={states.removeTopicModal}>
          <ModalDeleteStudentSurvey />
        </Visible>
      </StudentSurveyContext.Provider>
    </Fragment >
  );
};

export default StudentSurvey;
