import { useContext } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from '../context';

const Alternative = ({ alternative }) => {
  const { userType, actions } = useContext(SurveyContext);
  const color = userType === 'student' ? 'var(--color-primary)' : 'var(--color-secondary)';

  return (
    <div className="form__input">
      <input
        style={{'color': color}}
        id={`option-${alternative.letter}`}
        type="radio"
        name="option"
        className={userType}
        value={alternative.letter}
        onChange={actions.saveAlternative(alternative.letter)}
        checked={actions.isAlternativeSelected(alternative.letter)}
      />
      <label htmlFor={`option-${alternative.letter}`} style={{
          '--custom-color': color
        }}>{alternative.description}</label>
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
