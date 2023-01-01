import { useEffect, useState } from 'react';
import ColorButton from './ColorButton';
import AddQuestionInput from './AddQuestionInput';

import questionIcon from 'src/assets/images/question-icon.png';
import './Question.css';

const mockData = {
  "number": 4,
  "type": "Student",
  "topic": 4,
  "question": "",
  "alternatives": [
      {
        "letter": "A",
        "description": "",
        "value": 0
      },
      {
        "letter": "B",
        "description": "",
        "value": 0
      },
      {
        "letter": "C",
        "description": "",
        "value": 0
      },
      {
        "letter": "D",
        "description": "",
        "value": 0
      }
  ]
}

const Question = ({ selectedTopic, title, type }) => {
  const [alternatives, setAlternatives] = useState(mockData);
  const [number, setNumber] = useState({ number: 0 });

  console.log('type', type);

  useEffect(() => {
    const getQuestions = async function() {
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;

      fetch(`https://civi-conecta-server.adaptable.app/getSurveysByType?type=${type}`, {
        headers: {
          'Content-Type': 'application/json',
          token: jwt,
        }
      })
      .then(response => response.json())
      .then(data => console.log(data));
    }
    getQuestions();

  }, []);

  const setQuestionToState = (value) => {
    setAlternatives(current => {
        return { ...current, question: value}
      }
    )
  }

  const changeColor = (letter) => {
    setAlternatives(current => {
      let changeThis = current.alternatives.find(data => data.letter == letter);
      if(changeThis.value == 3){
        changeThis.value = 0;
      } else {
        changeThis.value = changeThis.value + 1;
      }
      return { ...current}
    })
  }

  const changeAlternative = (letter, value) => {
    setAlternatives(current => {
      let changeThis = current.alternatives.find(data => data.letter == letter);
        changeThis.description = value;
      return { ...current}
    })
  }

  const createSurvey = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const jwt = user.token;
      const payload = { ...alternatives, topic: selectedTopic };

      console.log('payload',payload);

      const fetching = await fetch('https://civi-conecta-server.adaptable.app/createSurvey', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          token: jwt
        }
      });

      const response = await fetching.json();
      console.log('response', response);
  }

  console.log('alternatives', alternatives);

  console.log('selectedTopic', selectedTopic);

    return (
      <main className="main-question-container">
          <div>
              <div className='question-container'>
                  <img src={questionIcon} alt="question-icon"/>
                  <p className='question-title'>{ title }</p>
              </div>
          </div>
          <div className='delete-container'>
              <button className='delete-button'>X</button>
          </div>
          <div className='edit-question-container'>
              <div>
                  <input className='question' value={alternatives.question} onChange={e => setQuestionToState(e.target.value)} placeholder='1.- Escriba su pregunta en este campo'></input>
              </div>
              <div className='options-container'>
              {
                alternatives && alternatives.alternatives.map(
                  (data, key) => (
                    <div key={key} className='option-component'>
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
                  )
                )
              }
              </div>
          </div>
          <div className='continue-button-container'>
              <button className='continue-button' onClick={createSurvey}>Continuar &gt;</button>
          </div>

      </main>
    )
}

export default Question;
