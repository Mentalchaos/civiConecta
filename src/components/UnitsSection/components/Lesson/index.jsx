import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UnitManagerContext } from '../../context';
import arrow from 'src/assets/Icons/arrow-degree.svg';
import './Lesson.css';

const Lesson = ({ id, number, objective, files }) => {
  const { actions, states, setters } = useContext(UnitManagerContext);
  const navigate = useNavigate();

  const handleDeleteLesson = () => {
    actions.deleteLesson(id);
  };

  const handleNavigation = () => {
    setters.setType('unit');
    navigate(`/admin/unit/lesson/${id}`);
  };

  return (
    <div className="class-box">
      <span className="class-box__delete" onClick={handleDeleteLesson}>
        X
      </span>
      <h2 className="class-box__title">Clase {number}</h2>
      <div className='class-box__objective'>
        <p>Objetivo: </p>
        <p>{objective}</p>
      </div>
      <div className="class-box__documents">
        <p>Documentos totales en esta clase: </p>
        <p>{files.length}</p>
      </div>

      <div className="box-link" onClick={handleNavigation}>
        <img className="box-link" src={arrow} alt="Mostrar documentos" width="15px" />
      </div>
    </div>
  );
};

Lesson.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  objective: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
};

export default Lesson;
