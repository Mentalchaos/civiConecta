import { useContext } from 'react';
import Visible from 'src/components/UI/Visible';
import AlternativeEdit from './components/AlternativeEdit';
import { QuestionContext } from './context';
import questionIcon from 'src/assets/images/question-icon.png';
import './Question.css';

const prop = x => (obj, idx) => (<span key={`${x}-${idx}`}>{obj[x]}</span>);

const Question = () => {
  const { states, setters, actions } = useContext(QuestionContext);

  const handleBack = (evt) => {
    evt.preventDefault();
    window.history.back();
  };

  const { alternatives, title } = states;

  const testForNull = alternatives.filter(data => data.description === '');
  const disabledStyles = testForNull.length > 0 || title.length === 0 ? 'disabledStyle' : '';

  return (
    <main className="main-question-container">
      <div className="go-back-section">
        <a className="link" onClick={handleBack}>Volver</a>
      </div>
      <div>
        <div className="question-container">
          <img src={questionIcon} alt="question-icon" />
          <p className="question-title">{states.topic.title}</p>
        </div>
      </div>
      <div className="edit-question-container">
        <div>
          <input
            className="question"
            value={states.title}
            onChange={e => setters.setTitle(e.target.value)}
            placeholder="1.- Escriba su pregunta en este campo"
          />
        </div>
        <div className="options-container">
          {states.alternatives.map((alternative, index) => (
            <AlternativeEdit alternative={alternative} key={index} />
          ))}
        </div>
      </div>
      <div className="continue-button-container">
        <button className={`continue-button ${disabledStyles}`} disabled={testForNull.length > 0 || title.length === 0 ? true : false} onClick={actions.saveSurvey}>
          Guardar
        </button>
      </div>
      <Visible condition={states.questions.length}>
        {states.questions.map((question, idx) => {
          return (
            <div key={question.uuid} className="edit-question-container custom-question-wrapper">
              <div className="custom-question__header">
                <span className="custom-question__title">
                  Pregunta #{idx + 1}: {question.description}
                </span>
                <span
                  className="custom-question__delete"
                  onClick={() => actions.deleteQuestion(question.id)}
                >
                  X
                </span>
              </div>
              <div className="custom-question__body">
                <div className="custom-question__body__label">
                  {question.alternatives.map(prop('label'))}
                </div>
                <div className="custom-question__body__label">
                  {question.alternatives.map(prop('value'))}
                </div>
                <div className="custom-question__body__label">
                  {question.alternatives.map(prop('description'))}
                </div>
              </div>
            </div>
          );
        })}
      </Visible>
    </main>
  );
};

export default Question;
