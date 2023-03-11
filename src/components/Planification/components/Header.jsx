import { useContext } from 'react';
import { PlanificationContext } from '../context';
import Visible from 'src/components/UI/Visible';
import arrowIcon from 'src/assets/Icons/arrow-down.svg';
import './Header.css';

const Header = () => {
  const { states } = useContext(PlanificationContext);
  const lesson = states.lesson;

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="event-header">
      <div className="header-info">
        <Visible condition={lesson.eventType}>
          <h3 className="class-title">{lesson.title}</h3>
          <span className="class-files">{states.files.length} documentos totales en esta clase.</span>
        </Visible>
        <Visible condition={lesson.number}>
          <h3 className="class-title">Clase {lesson.number}</h3>
          <span className="class-files">{states.files.length} documentos totales en esta clase.</span>
        </Visible>
      </div>
      <img onClick={handleGoBack} className="icon-back-to" src={arrowIcon} alt="back to" />
    </div>
  );
};

export default Header;
