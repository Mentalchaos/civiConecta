import { useEffect, useState } from 'react';
import ColorButton from './ColorButton';
import AddQuestionInput from './AddQuestionInput';

import questionIcon from 'src/assets/images/question-icon.png';
import './Question.css';

const mockData = {
  number: 4,
  type: 'Student',
  topic: 4,
  question: '',
  alternatives: [
    {
      letter: 'A',
      description: '',
      value: 0,
    },
    {
      letter: 'B',
      description: '',
      value: 0,
    },
    {
      letter: 'C',
      description: '',
      value: 0,
    },
    {
      letter: 'D',
      description: '',
      value: 0,
    },
  ],
};

const Question = ({ selectedTopic, title, type }) => {
  const [alternatives, setAlternatives] = useState(mockData);
  const [questions, setQuestions] = useState([]);
  const [resetInputs, setResetInputs] = useState(false);

  console.log('type', type);

  useEffect(() => {
    const getQuestions = async function () {
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;

      fetch(
        `https://civi-conecta-server.adaptable.app/getSurveysByType?type=${type}`,
        {
          headers: {
            'Content-Type': 'application/json',
            token: jwt,
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          const questionsFiltered = data.surveys.filter(
            survey => survey.topic.number === selectedTopic,
          );
          setQuestions(questionsFiltered);
        });
    };
    getQuestions();
  }, []);

  const setQuestionToState = value => {
    setAlternatives(current => {
      return { ...current, question: value };
    });
  };

  const changeColor = letter => {
    setAlternatives(current => {
      let changeThis = current.alternatives.find(data => data.letter == letter);
      if (changeThis.value == 3) {
        changeThis.value = 0;
      } else {
        changeThis.value = changeThis.value + 1;
      }
      return { ...current };
    });
  };

  const changeAlternative = (letter, value) => {
    setAlternatives(current => {
      let changeThis = current.alternatives.find(data => data.letter == letter);
      changeThis.description = value;
      return { ...current };
    });
  };

  const deleteSurvey = async surveyNumber => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt = user.token;

    const fetching = await fetch(
      `https://civi-conecta-server.adaptable.app/deleteSurvey?number=${surveyNumber}&type=${type}&topic=${selectedTopic}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        },
      },
    );
    const response = await fetching.json();
    if (response.ok) {
      const questionDeleted = { ...response.survey };
      const filterQuestions = questions.filter(
        question => question.number !== questionDeleted.number,
      );
      setQuestions(filterQuestions);
    }
  };

  const createSurvey = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt = user.token;
    const number = questions.length
      ? questions[questions.length - 1].number + 1
      : 1;
    const payload = {
      ...alternatives,
      type,
      topic: selectedTopic,
      number,
    };

    console.log('payload', payload);

    const fetching = await fetch(
      'https://civi-conecta-server.adaptable.app/createSurvey',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        },
      },
    );

    const response = await fetching.json();
    if (response.ok) {
      setQuestions([...questions, response.survey]);
      setResetInputs(true);
    }
    console.log('response', response);
  };

  console.log('alternatives', alternatives);

  console.log('selectedTopic', selectedTopic);

  return (
    <main className="main-question-container">
      <div>
        <div className="question-container">
          <img src={questionIcon} alt="question-icon" />
          <p className="question-title">{title}</p>
        </div>
      </div>
      <div className="edit-question-container">
        <div>
          <input
            className="question"
            value={alternatives.question}
            onChange={e => setQuestionToState(e.target.value)}
            placeholder="1.- Escriba su pregunta en este campo"
          ></input>
        </div>
        <div className="options-container">
          {alternatives &&
            alternatives.alternatives.map((data, key) => (
              <div key={key} className="option-component">
                <ColorButton
                  changeColor={changeColor}
                  letter={data.letter}
                  value={data.value}
                />
                <AddQuestionInput
                  changeAlternative={changeAlternative}
                  letter={data.letter}
                  description={data.description}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="continue-button-container">
        <button className="continue-button" onClick={createSurvey}>
          Guardar
        </button>
      </div>
      <div>
        {questions &&
          questions.map(question => {
            const alternatives = question.alternatives.map(item => {
              return <span>{item.description}</span>;
            });
            const optionLetter = question.alternatives.map(item => {
              return <span>{item.letter}.</span>;
            });
            return (
              <div
                style={{ marginTop: 10 }}
                key={question.number}
                className="edit-question-container"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Pregunta: {question.question}
                  </span>
                  <span
                    onClick={() => deleteSurvey(question.number)}
                    style={{
                      cursor: 'pointer',
                      color: 'var(--color-secondary)',
                      fontWeight: 'bold',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: 25,
                      padding: '0px 20px',
                    }}
                  >
                    X
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 5,
                    marginTop: 10,
                    paddingLeft: 20,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    {optionLetter}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    {alternatives}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Question;
