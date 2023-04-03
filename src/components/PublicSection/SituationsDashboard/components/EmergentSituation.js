import goTo from 'src/assets/Icons/open-arrow.svg';
import '../SituationsDashboard.css';
import '../index'

const EmergentSituation = ({id,title, description}) => {
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
      <div className='situation-see-class'>
        <p>Ver clase</p>
        <img src={goTo} alt='arrow-icon' />
      </div>
    </div>
  )
}

export default EmergentSituation;