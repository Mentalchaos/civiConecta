import { useContext } from 'react';
import { PlanificationContext } from '../context';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Header.css';

const handleGoBack = () => window.history.back();

const Header = () => {
  const { states } = useContext(PlanificationContext);
  const lesson = states.lesson;
  const { number } = lesson;
  let text;

  if (number) {
    text = `Clase: ${number}`;
  } else if (lesson.planning) {
    text = `Tema: ${lesson.planning.topic}`;
  }

  return (
    <div className="event-header">
      <div className="header-info">
        <div className='class-name'>
          <p>{text}</p>
        </div>
        <div className='class-info'>
          <p>Documentos totales: {states.documentQuantity}</p>
        </div>
      </div>
      <div>
        <img
          onClick={handleGoBack}
          className="icon-back-to"
          src={arrowIcon}
          alt="back to"
        />
      </div>
    </div>
  );
};

export default Header;
