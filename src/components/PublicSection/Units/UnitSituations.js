import './UnitSituations.css';
import emergent from 'src/assets/images/emergent.jpg';
import goTo from 'src/assets/Icons/open-arrow.svg';
import { useNavigate } from 'react-router-dom';


const UnitSituations = ({ title, to }) => {
  const navigate = useNavigate();
    return (
        <div className='unit-situations-container'>
            <div className='unit-situations-one'>
                <div className='unit-title'>
                    <p>{title}</p>
                </div>
                <div className='unit-subtitle' onClick={() => navigate(to)}>
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
