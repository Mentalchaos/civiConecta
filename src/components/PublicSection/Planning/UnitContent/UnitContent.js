import ButtonOptions from "../../UnitsDashboard/ButtonOptions";
import back from 'src/assets/Icons/back-arrow.svg';
import './UnitContent.css';
import UnitTable from "./UnitTable";

const UnitContent = ({ planningData, title, type }) => {

  return (
    <div className=''>
      <div className="unit-content-container">
        <ButtonOptions />
        <button className='profile-back-container back1' onClick={() => window.history.back()}>
          <img src={back} alt='go-back' />
          Volver
        </button>
        { planningData ? <UnitTable planningData={planningData} title={title} type={type}/> : <p>No hay situaciones emergentes creadas</p> }
      </div>
    </div>
  )
}

UnitContent.displayName = 'UnitContent';

export default UnitContent;
