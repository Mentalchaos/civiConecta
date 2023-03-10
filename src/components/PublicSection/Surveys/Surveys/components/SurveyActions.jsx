import { useContext } from 'react';
import { SurveyContext } from '../context';

const SurveyActions = () => {
  const { userType, actions, states } = useContext(SurveyContext);
  const text = states.isLastQuestion ? 'Finalizar Encuesta' : 'Continuar';

  const handleGoBack = () => {
    actions.goBack();
  };

  const handleContinue = () => {
    actions.continue();
  };

  return (
    <div className="form__actions">
      <button
        className={`form__previous-question ${userType}`}
        disabled={states.isFirstQuestion}
        onClick={handleGoBack}
      >
        Pregunta anterior
      </button>
      <button
        className={`form__next-question ${userType}`}
        onClick={handleContinue}
      >
        {text}
      </button>
    </div>
  );
};

export default SurveyActions;
