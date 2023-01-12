import { useEffect, useState } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import Categories from '../TeacherSurvey/Categories/Categories';
import studentImage from '../../assets/images/student-image.png';
import Button from 'src/components/UI/Button';
import Question from '../Question/Question';
import Spinner from '../UI/Spinner';
import Modal from '../UI/Modal';
import './StudentSurvey.css';

const StudentSurvey = () => {
  const [isSurveyVisible, setSurveyVisibility] = useState(false);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [title, setTitle] = useState('');
  const [surveys, setSurveys] = useState('');
  const [showModal, setModal] = useState(false);
  const [topic, setTopic] = useState('');
  const [removeTopicModal, setRemoveTopicModal] = useState(false);
  const [selectValue, setSelectValue] = useState('null');

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

      fetch('https://civi-conecta-server.adaptable.app/getSurveysByType?type=Student', {
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        },
      })
        .then(response => response.json())
        .then(data => setSurveys(data.surveys));
    };

    getSurveys();
    getTopics();
  }, []);

  const topicLength = topics[topics.length - 1]?.number + 1;

  const setTopicAndVisibility = (number, title) => {
    setSelectedTopic(number);
    setTitle(title);
    setSurveyVisibility(true);
  };

  const createCategory = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt = user.token;

    const payload = {
      number: topicLength,
      title: topic,
    };

    fetch('https://civi-conecta-server.adaptable.app/createTopic', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
    }).then(() => window.location.reload(true));
  };

  const removeCategory = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt = user.token;

    fetch(`https://civi-conecta-server.adaptable.app/deleteTopic?number=${selectValue}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token: jwt,
      },
    }).then(resp => {
      if (resp.ok) {
        window.location.reload(true);
      } else {
        console.log(resp);
      }
    });
  };

  const disabledStyle = selectValue === 'null' ? 'disabled-styles' : '';

  return (
    <>
      <SectionsHeader image={studentImage} />
      <main className="main-content">
        <div className="header">
          <div>
            <span className="section-title">Encuesta al estudiante</span>
          </div>
        </div>

        {isSurveyVisible ? (
          <Question type={'Student'} title={title} surveys={surveys} selectedTopic={selectedTopic} />
        ) : (
          <div className="categories-container">
            {topics.length === 0 && <Spinner />}
            {topics.map(item => {
              return (
                <Categories
                  type={'student'}
                  title={item.title}
                  detail={item.detail}
                  key={`topic-${item.number}`}
                  onclick={() => setTopicAndVisibility(item.number, item.title)}
                />
              );
            })}
          </div>
        )}
        <div className="buttons-container-fetch">
          {topics.length < 4 && !isSurveyVisible && (
            <div className="button-container teacher-survey category-button">
              <Button onClick={() => setModal(true)}>
                <p className="add-button-icon">+</p>
                <p className="add-button-text">Añadir Categoría</p>
              </Button>
            </div>
          )}
          <div className="button-container teacher-survey category-button">
            <button className="add-button" onClick={() => setRemoveTopicModal(true)}>
              <p className="add-button-icon">-</p>
              <p className="add-button-text">Eliminar categoria</p>
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <Modal style={{ padding: '20px 40px', marginTop: '50px' }}>
          <div>
            <p>Ingrese el nombre de la categoria que desea crear</p>
            <input className="modal-input" value={topic} onChange={e => setTopic(e.target.value)}></input>
            <div className="buttons-inputs">
              <button className="create-category" onClick={() => createCategory()}>
                Crear
              </button>
              <button className="close-modal" onClick={() => setModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}
      {removeTopicModal && (
        <Modal style={{ padding: '20px 40px', marginTop: '50px' }}>
          <div>
            <p>Seleccione la categoria que desea eliminar</p>
            <p style={{ color: 'red' }}>Para eliminar una categoria, ésta no debe tener preguntas asociadas.</p>
            <select name="select" className="remove-topic-select" onChange={e => setSelectValue(e.target.value)}>
              <option value="null">Seleccionar</option>
              {topics.map(data => (
                <option key={data.number} value={data.number}>
                  {data.title}
                </option>
              ))}
            </select>
            <div className="buttons-inputs">
              <button
                className={`create-category ${disabledStyle}`}
                disabled={selectValue == null}
                onClick={() => removeCategory()}
              >
                Eliminar
              </button>
              <button className="close-modal" onClick={() => setRemoveTopicModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StudentSurvey;
