import './Question.css';

const ColorButton = ({ letter, changeColor, value }) => {
  const css = ['#FFFFFF', 'yellow', 'red'];

  return (
    <button
      onClick={() => changeColor(letter)}
      style={{ background: `${css[value]}` }}
      className="color-button"
    >
      {letter}
    </button>
  );
};

export default ColorButton;
