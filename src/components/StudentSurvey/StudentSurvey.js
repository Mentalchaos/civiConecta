import { useEffect, useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from '../TeacherSurvey/Categories/Categories';
import studentImage from '../../assets/images/student-image.png';
import './StudentSurvey.css';
import Question from '../Question/Question';
import Spinner from '../UI/Spinner';

const StudentSurvey = () => {
  const [isSurveyVisible, setSurveyVisibility] = useState(false);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);

  useEffect(() => {
    const getTopics = async function() { 
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;

      fetch('https://civi-conecta-server.adaptable.app/getTopics', {
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        }
      })
      .then(response => response.json())
      .then(data => setTopics(data.topics));
    }
    getTopics();
  }, []);

  console.log('selected topic',selectedTopic);

  const setTopicAndVisibility = (number) => {
    setSelectedTopic(number);
    setSurveyVisibility(true);
  }

  return (
    <>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al estudiante</span>
          </div>
        </div>

        { isSurveyVisible ? (
          <Question />
        ) : (
          <div className="categories-container">
            { topics.length == 0 && <Spinner /> }
            {
              topics.map(item => {
                return (
                  <Categories
                    type={'student'}
                    title={item.title}
                    detail={item.detail}
                    key={`topic-${item.number}`}
                    onclick={() => setTopicAndVisibility(item.number)}
                  />
                );
              })
            }
          </div>
        )}
      </main>
      { topics.length < 4 && (
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

export default StudentSurvey;
