import { useContext } from 'react';
import { PlanificationContext } from '../context';
import Visible from 'src/components/UI/Visible';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Header.css';


const handleGoBack = () => window.history.back();


const Header = () => {
  const { states } = useContext(PlanificationContext);
  const lesson = states.lesson;

  return (
    <div className="event-header">
      <div className="header-info">
        <h3 className="class-title">Clase {lesson.number}</h3>
        <span className="class-files">
          {states.documentQuantity} documentos totales en esta clase.
        </span>
      </div>
      <img
        onClick={handleGoBack}
        className="icon-back-to"
        src={arrowIcon}
        alt="back to"
      />
    </div>
  );
};

export default Header;
