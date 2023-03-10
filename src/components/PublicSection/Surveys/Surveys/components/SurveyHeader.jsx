import PropTypes from 'prop-types';

const SurveyHeader = ({ userType, questions, currentQuestion }) => {
  return (
    <article className={`surveys__questions-list ${userType}`}>
      {questions.map((question, index) => {
        const isActive = currentQuestion === index ? 'active' : '';
        return (
          <span className={`question-number ${isActive}`} key={question.id}>
            Pregunta #{index + 1}
          </span>
        );
      })}
    </article>
  );
};

SurveyHeader.propTypes = {
  userType: PropTypes.oneOf(['student', 'teacher']).isRequired,
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired
};

export default SurveyHeader;
