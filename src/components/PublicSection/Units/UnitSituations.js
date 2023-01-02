import './UnitSituations.css';
import emergent from 'src/assets/images/emergent.jpg';
import goTo from 'src/assets/Icons/open-arrow.svg';


const UnitSituations = ({title}) => {
    return (
        <div className='unit-situations-container'>
            <div className='unit-situations-one'>
                <div className='unit-title'>
                    <p>{title}</p>
                </div>
                <div className='unit-subtitle'>
                    <p>Ir a los contenidos</p>
                    <img src={goTo} alt="arrow-icon" />
                </div>
            </div>
            <div className='unit-situations-two'>
                <img src={emergent} alt="emergent-situation"/>
            </div>
        </div>
    )
}

export default UnitSituations;