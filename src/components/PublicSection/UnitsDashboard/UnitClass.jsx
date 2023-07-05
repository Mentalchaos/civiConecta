import arrow from '../../../assets/Icons/arrow-degree-green.svg';
import { useNavigate } from 'react-router-dom';

const UnitClass = ({ id, objective, description, number }) => {
  const navigate = useNavigate();

  return (
    <div className='class'>
      <div className='class-title'>Clase Nº{number}</div>
      <div className='sub-title'>{ objective }</div>
      <div className='class-text'>{ description}</div>
      <div className='see-class-container'>
        <button className='see-class' onClick={() => navigate(`/public/planning/${id}/${objective}`)}>
          Ver clase
          <img className='arrow' src={arrow} alt='arrow-img' />
        </button>
      </div>
    </div>
  )
}

UnitClass.displayName = 'UnitClass';

export default UnitClass;
