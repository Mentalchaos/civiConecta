import { useNavigate } from 'react-router-dom';
import StudentSurveyLayout from 'src/Layouts/StudentSurveyLayout';
import Loading from 'src/components/UI/Loading';
import Visible from 'src/components/UI/Visible';
import Categories from '../Categories';
import ModalAddStudentSurvey from './components/ModalAddStudentSurvey';
import ModalDeleteStudentSurvey from './components/ModalDeleteStudentSurvey';
import useStudentSurvey from './hooks/useStudentSurvey';
import { StudentSurveyContext } from './context';
import './StudentSurvey.css';

const StudentSurvey = () => {
  const navigate = useNavigate();
  const { states, setters, actions } = useStudentSurvey();

  const handleEditCategory = (topicId) => () => {
    navigate(`student/${topicId}/questions`);
  };

  return (
    <StudentSurveyContext.Provider value={{ states, setters, actions }}>
      <StudentSurveyLayout>
        <div className="categories-container">
          <Loading isLoading={states.fetching}>
            {states.topics.map(item => (
              <Categories
                type="student"
                title={item.title}
                detail={item.detail}
                key={`topic-${item.id}`}
                onClick={handleEditCategory(item.id)}
              />
            ))}
          </Loading>
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
                <p className="add-button-text">Eliminar categoría</p>
              </button>
            </div>
          </Visible>
        </div>
        <Visible condition={states.showModal}>
          <ModalAddStudentSurvey />
        </Visible>

        <Visible condition={states.removeTopicModal}>
          <ModalDeleteStudentSurvey />
        </Visible>
      </StudentSurveyLayout>
    </StudentSurveyContext.Provider>
  );
};

export default StudentSurvey;
