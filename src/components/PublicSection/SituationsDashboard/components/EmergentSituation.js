import { useNavigate, useParams } from 'react-router-dom';
import goTo from 'src/assets/Icons/open-arrow.svg';
import '../SituationsDashboard.css';

const EmergentSituation = ({id,title, description, lessonId}) => {
  const navigate = useNavigate();

  return (
    <div className='situation-day'>
      <div className='situation-date'>
        <p> Clase Nº{id}</p>
      </div>
      <div className='situation-title'>
        <p>{title}</p>
      </div>
      <div className='situation-desc'>
        <p>{description}
        </p>
      </div>
      <div className='situation-see-class' onClick={() => navigate(`/public/planning/${lessonId}/${title}/situation`)}>
        <p>Ver clase</p>
        <img src={goTo} alt='arrow-icon' />
      </div>
    </div>
  )
}

export default EmergentSituation;
