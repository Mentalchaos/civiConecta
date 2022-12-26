import './Question.css';

const ColorButton = ({ letter, changeColor, value }) => {
  const css = ["#FFFFFF", "green","yellow", "red"];

  return <button onClick={() => changeColor(letter)} style={{ background: `${css[value]}`}} className="color-button"></button>
}

export default ColorButton;