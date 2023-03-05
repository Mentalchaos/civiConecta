import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import ModalToFinish from '../ProfessorSurvey/ModalToFinish/ModalToFinish';

const questions2 = [
  {
    preguntaNum: 1,
    pregunta: 'Que le parece a ud como programa el color1?',
    selected: 'valor1',
    alternativas: { a: 'asdasd1', b: 'asdas1', c: 'asdasd1', d: 'asdasd1' },
  },
  {
    preguntaNum: 2,
    pregunta: 'Que le parece a ud como programa el color2?',
    selected: 'valor2',
    alternativas: { a: 'asdasd2', b: 'asdas2', c: 'asdasd2', d: 'asdasd2' },
  },
  {
    preguntaNum: 3,
    pregunta: 'Que le parece a ud como programa el color3?',
    selected: 'valor3',
    alternativas: {
      a: 'valor1', 
      b: 'asdas3',
      c: 'asdasd3', 
      d: 'asdasd3' 
    },
  }
];

const questions = {
	"ok": true,
	"feedback": {
		"id": 1,
		"isFinished": 0
	},
	"survey": [
		{
			"id": 1,
			"description": "con que lenguaje se desarrollo esta aplicacion?",
			"alternatives": [
				{
					"letter": "A",
					"description": "Node JS",
					"value": 1
				},
				{
					"letter": "B",
					"description": "Java",
					"value": 2
				},
				{
					"letter": "C",
					"description": "Javascript",
					"value": 0
				},
				{
					"letter": "D",
					"description": "React",
					"value": 1
				}
			]
		},
		{
			"id": 2,
			"description": "que paradigma de programacion es invalido?",
			"alternatives": [
				{
					"letter": "A",
					"description": "programacion orientada a objetos",
					"value": 2
				},
				{
					"letter": "B",
					"description": "programacion orientada a aspectos",
					"value": 1
				},
				{
					"letter": "C",
					"description": "programacion orientada a restricciones",
					"value": 1
				},
				{
					"letter": "D",
					"description": "ninguna de las anteriores",
					"value": 0
				}
			]
		},
		{
			"id": 3,
			"description": "que base de datos se esta utilizando?",
			"alternatives": [
				{
					"letter": "A",
					"description": "ninguna de las anteriores",
					"value": 2
				},
				{
					"letter": "B",
					"description": "PostgreSQL",
					"value": 0
				},
				{
					"letter": "C",
					"description": "SQLite",
					"value": 1
				},
				{
					"letter": "D",
					"description": "MongoDB",
					"value": 1
				}
			]
		},
		{
			"id": 4,
			"description": "cual de todas estas no es una DB",
			"alternatives": [
				{
					"letter": "A",
					"description": "CockroachDB",
					"value": 1
				},
				{
					"letter": "B",
					"description": "AlligatorDB",
					"value": 0
				},
				{
					"letter": "C",
					"description": "Apache Cassandra",
					"value": 2
				},
				{
					"letter": "D",
					"description": "DuckDB",
					"value": 1
				}
			]
		},
		{
			"id": 5,
			"description": "que comando se usa para ingresar cambios al staging area",
			"alternatives": [
				{
					"letter": "A",
					"description": "git commit",
					"value": 1
				},
				{
					"letter": "B",
					"description": "git save",
					"value": 2
				},
				{
					"letter": "C",
					"description": "git push",
					"value": 1
				},
				{
					"letter": "D",
					"description": "git add",
					"value": 0
				}
			]
		},
		{
			"id": 6,
			"description": "que comando nos ayuda a descubrir el commit que metio un bug en el historial",
			"alternatives": [
				{
					"letter": "A",
					"description": "git reflog",
					"value": 2
				},
				{
					"letter": "B",
					"description": "git reset",
					"value": 1
				},
				{
					"letter": "C",
					"description": "git bisect",
					"value": 0
				},
				{
					"letter": "D",
					"description": "git checkout",
					"value": 1
				}
			]
		},
		{
			"id": 7,
			"description": "que sistema operativo es mejor para el gaming",
			"alternatives": [
				{
					"letter": "A",
					"description": "Linux",
					"value": 1
				},
				{
					"letter": "B",
					"description": "Windows",
					"value": 0
				},
				{
					"letter": "C",
					"description": "MacOS",
					"value": 1
				},
				{
					"letter": "D",
					"description": "PlayStation",
					"value": 2
				}
			]
		},
		{
			"id": 8,
			"description": "que prefiere ud, el tangananica o el tangananá",
			"alternatives": [
				{
					"letter": "A",
					"description": "a mi me gusta el tangananica",
					"value": 0
				},
				{
					"letter": "B",
					"description": "yo prefiero el tangananá",
					"value": 1
				},
				{
					"letter": "C",
					"description": "la mejor historia es tangananica",
					"value": 2
				},
				{
					"letter": "D",
					"description": "el mejor verso es tangananá",
					"value": 1
				}
			]
		}
	]
}

const Surveys = ({ userType }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const { alternativas, pregunta, preguntaNum } = questions[currentQuestion];

  const navigate = useNavigate();
  const typeUser = userType === 'student' ? 'estudiante' : 'docente';

  useEffect(() => {
    // get survey depending type
    console.log(userType);
    setIsSurveyCompleted(false);
  }, []);

  const handleSendAnswer = () => {
    if (currentQuestion === questions.length - 1 && userType !== 'student') {
      setShowModal(true);
      return;
    } else if (currentQuestion === questions.length - 1 && userType === 'student') {
      //send answer
      console.log('survey is completed from student');
      setIsSurveyCompleted(true);
      return;
    }
    currentQuestion < questions.length && setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishSurvey = () => {
    // navigate('/completed-survey');
    setIsSurveyCompleted(true);
  };

  const handlePreviousQuestion = () => {
    currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (isSurveyCompleted) return <CompletedSurvey type={userType} />;

  return (
    <section className="surveys">
      {showModal && <ModalToFinish closeModal={handleCloseModal} finishSurvey={handleFinishSurvey} />}
      <article className={`surveys__questions-list ${userType}`}>
        {questions.map(question => {
          const { preguntaNum } = question;
          const currentQuestionNumber = currentQuestion === preguntaNum - 1 && 'active';
          return (
            <span className={`question-number ${currentQuestionNumber}`} key={preguntaNum}>
              Pregunta {preguntaNum}
            </span>
          );
        })}
      </article>

      <article className="surveys__question-alternatives">
        <div className="surveys__alternatives-container">
          <span className="surveys__header-title">Encuesta {typeUser}</span>
          <p className="surveys__question">{pregunta}</p>
          <div className="alternatives__form" onChange={e => handleInputChecked(e)}>
              <input className={userType} checked={questions[currentQuestion].alternativas.a.selected} id="option1" type="radio" name="option" value={questions[currentQuestion].alternativas.a.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.b.selected} id="option2" type="radio" name="option" value={questions[currentQuestion].alternativas.b.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.c.selected} id="option3" type="radio" name="option" value={questions[currentQuestion].alternativas.c.value} />
              <input className={userType} checked={questions[currentQuestion].alternativas.d.selected} id="option4" type="radio" name="option" value={questions[currentQuestion].alternativas.d.value} />
          </div>
            <div className="form__input">
              <input className={userType} id="option2" type="radio" name="option" value={alternativas.b} />
              <label htmlFor="option2">{alternativas.b}</label>
            </div>
            <div className="form__input">
              <input className={userType} id="option3" type="radio" name="option" value={alternativas.c} />
              <label htmlFor="option3">{alternativas.c}</label>
            </div>
            <div className="form__input">
              <input className={userType} id="option4" type="radio" name="option" value={alternativas.d} />
              <label htmlFor="option4">{alternativas.d}</label>
            </div>
          <div className="form__actions">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion < 1}
              className={`form__previous-question ${userType}`}
            >
              Pregunta anterior
            </button>
            <button onClick={handleSendAnswer} className={`form__next-question ${userType}`}>
              {currentQuestion === questions.length - 1 ? 'Finalizar encuesta' : 'Continuar'}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Surveys;
