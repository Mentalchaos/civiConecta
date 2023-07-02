import arrow from '../../../assets/Icons/arrow-degree-green.svg';

const UnitClass = ({ id, objective, description, number }) => {

  return (
    <div className='class'>
      <div className='class-title'>Clase Nº{number}</div>
      <div className='sub-title'>{ objective }</div>
      <div className='class-text'>{ description}</div>
      <div className='see-class-container'>
        <button className='see-class'>
          Ver clase
          <img className='arrow' src={arrow} alt='arrow-img' />
        </button>
      </div>
    </div>
  )
}

UnitClass.displayName = 'UnitClass';

export default UnitClass;
