import { useContext } from 'react';
import { PlanificationContext } from '../context';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Header.css';

const handleGoBack = () => window.history.back();

const Header = () => {
  const { states } = useContext(PlanificationContext);
  const lesson = states.lesson;
  const { number } = lesson;

  const lessonOrTopic = number || lesson.planning ? (number ? `Clase: ${number}` : `Tema: ${lesson.planning.topic}`) : '';

  return (
    <div className="event-header">
      <div className="header-info">
        <div className='class-name'>
          <p>{lessonOrTopic}</p>
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
