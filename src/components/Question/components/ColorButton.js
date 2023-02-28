import PropTypes from 'prop-types';
import '../Question.css';

const COLORS = ['white', 'yellow', 'red'];

const ColorButton = ({ label, changeColor, value }) => {
  return (
    <button
      onClick={() => changeColor(label)}
      style={{ background: `${COLORS[value]}` }}
      className="color-button"
    >
      {label}
    </button>
  );
};

ColorButton.propTypes = {
  label: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default ColorButton;
