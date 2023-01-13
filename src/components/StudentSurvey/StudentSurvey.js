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
  const [fetching, setFetching] = useState(false);

  const buttonDefault = {
    padding: '5px 35px',
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
    borderRadius: 25,
  };

  const cancelButton = {
    padding: '5px 35px',
    backgroundColor: '#fff',
    border: '1px solid var(--color-secondary)',
    color: 'var(--color-secondary)',
    borderRadius: 25,
  };

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

  const topicLength = topics.length ? parseInt(topics[topics.length - 1]?.number + 1) : 1;

  const setTopicAndVisibility = (number, title) => {
    setSelectedTopic(number);
    setTitle(title);
    setSurveyVisibility(true);
  };

  const createCategory = async () => {
    setFetching(true);
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
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.ok) {
          setFetching(false);
          window.location.reload(true);
        } else {
          setFetching(false);
          alert(resp.error?.message);
          console.log(resp);
        }
      });
  };

  const removeCategory = async () => {
    setFetching(true);
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
        setFetching(false);
        window.location.reload(true);
      } else {
        setFetching(false);
        console.log(resp);
      }
    });
  };

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
            {fetching && (
              <div style={{ textAlign: 'center', display: 'block' }}>
                <Spinner />
              </div>
            )}

            {!fetching &&
              topics.map(item => {
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
              <button className="add-button" onClick={() => setModal(true)}>
                <p className="add-button-icon">+</p>
                <p className="add-button-text">Añadir Categoría</p>
              </button>
            </div>
          )}
          {!isSurveyVisible && (
            <div className="button-container teacher-survey category-button">
              <button className="add-button" onClick={() => setRemoveTopicModal(true)}>
                <p className="add-button-icon">-</p>
                <p className="add-button-text">Eliminar categor&iacute;a</p>
              </button>
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <Modal style={{ padding: '20px 40px', marginTop: '50px' }}>
          <div>
            <p>Ingrese el nombre de la categor&iacute;a que desea crear</p>
            <input
              autoFocus={true}
              style={{ padding: 10 }}
              className="modal-input"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            ></input>
            <div className="buttons-inputs">
              <Button text={'Crear'} customStyles={buttonDefault} onClick={() => createCategory()}></Button>
              <Button text={'Cerrar'} customStyles={cancelButton} onClick={() => setModal(false)}></Button>
            </div>
          </div>
        </Modal>
      )}
      {removeTopicModal && (
        <Modal style={{ padding: '20px 40px', marginTop: '50px' }}>
          <div>
            <p>Seleccione la categor&iacute;a que desea eliminar</p>
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
              <Button
                customStyles={buttonDefault}
                text={'Eliminar'}
                disabled={selectValue === null}
                onClick={() => removeCategory()}
              >
                Eliminar
              </Button>
              <Button text={'Cerrar'} customStyles={cancelButton} onClick={() => setRemoveTopicModal(false)}>
                Cerrar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StudentSurvey;
