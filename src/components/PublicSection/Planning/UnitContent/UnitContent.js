import ButtonOptions from "../../UnitsDashboard/ButtonOptions";
import back from 'src/assets/Icons/back-arrow.svg';
import './UnitContent.css';
import UnitTable from "./UnitTable";
import MobileDropdown from "../../MobileDropdown/MobileDropdown";

const UnitContent = ({ planningData, title, type }) => {

  const location = {
    'ephemeris': 'Efemérides',
    'unit': 'Planificación Personalizada',
    'situation': 'Situaciones Emergentes'
  }

  return (
    <div className=''>
      <div className="unit-content-container">
        <div className="button-options-container">
          <ButtonOptions />
        </div>
        <button className='profile-back-container back1' onClick={() => window.history.back()}>
          <img src={back} alt='go-back' />
          Volver
        </button>
        <div className='mobile-dropdown-container'>
          <MobileDropdown section={location[type]} />
        </div>
        { planningData ? <UnitTable planningData={planningData} title={title} type={type}/> : <p>No hay situaciones emergentes creadas</p> }
      </div>
    </div>
  )
}

UnitContent.displayName = 'UnitContent';

export default UnitContent;
