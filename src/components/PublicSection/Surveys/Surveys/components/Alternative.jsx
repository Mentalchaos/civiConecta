import { useContext } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from '../context';

const Alternative = ({ alternative }) => {
  const { userType, actions } = useContext(SurveyContext);

  return (
    <div className="form__input">
      <input
        id={`option-${alternative.letter}`}
        type="radio"
        name="option"
        className={userType}
        value={alternative.letter}
        onChange={actions.saveAlternative(alternative.letter)}
        checked={actions.isAlternativeSelected(alternative.letter)}
      />
      <label htmlFor={`option-${alternative.letter}`}>{alternative.description}</label>
    </div>
  );
};

Alternative.propTypes = {
  alternative: PropTypes.shape({
    letter: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default Alternative;
