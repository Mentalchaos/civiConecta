import ButtonOptions from "../../UnitsDashboard/ButtonOptions";
import back from 'src/assets/Icons/back-arrow.svg';
import UnitTitle from "./UnitTitle";
import './UnitContent.css'
import UnitTable from "./UnitTable"
import Footer from "../../Footer";

const UnitContent = () => {
    return (
        <div className=''>
            <div className="unit-content-container">
                <ButtonOptions />
                <button className='profile-back-container back1'>
                    <img src={back} alt=''/>
                    Volver
                </button>
                <UnitTitle />
                <UnitTable />
            </div>
        </div>
    )
}

export default UnitContent;