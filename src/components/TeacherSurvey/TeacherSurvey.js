import { useEffect, useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from './Categories/Categories';
import Question from '../Question/Question';

import teacherImage from '../../assets/images/teacher-banner.png';
import './TeacherSurvey.css';

const TeacherSurvey = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [isSurveyVisible, setSurveyVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [surveys, setSurveys] = useState('');

  useEffect(() => {
    const getTopics = async function () {
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;

      fetch('https://civi-conecta-server.adaptable.app/getTopics', {
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        },
      })
        .then(response => response.json())
        .then(data => setTopics(data.topics));
    };

    const getSurveys = async function () {
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;

      fetch(
        'https://civi-conecta-server.adaptable.app/getSurveysByType?type=Teacher',
        {
          headers: {
            'Content-Type': 'application/json',
            token: jwt,
          },
        },
      )
        .then(response => response.json())
        .then(data => setSurveys(data.surveys));
    };
    getTopics();
    getSurveys();
  }, []);

  console.log('selected topic', selectedTopic);
  console.log('surveys', surveys);

  const setTopicAndVisibility = (number, title) => {
    setSelectedTopic(number);
    setTitle(title);
    setSurveyVisibility(true);
  };

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
          <Question
            type={'Teacher'}
            title={title}
            surveys={surveys}
            selectedTopic={selectedTopic}
          />
        ) : (
          <div className="categories-container">
            {topics.map(item => {
              return (
                <Categories
                  title={item.title}
                  detail={item.detail}
                  key={item.title}
                  onclick={() => setTopicAndVisibility(item.number, item.title)}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default TeacherSurvey;
