import Footer from '../Footer/index';
import ButtonOptions from './ButtonOptions';
import './UnitsDashboard.css';
import Unit from './Unit';
import back from 'src/assets/Icons/back-arrow.svg';
import Class from './Class';
import { useParams } from 'react-router-dom';

const UnitsDashboard = () => {
  const { unitId } = useParams();
  console.log('unitId',unitId);

    return (
        <div className=''>
            <div className='dashboard-container'>
                <ButtonOptions />
                <button className='profile-back-container back1'>
                    <img src={back} alt=''/>
                    Volver
                </button>
                <Unit />
                <Class />
            </div>
            <div className='footer-div'>
                <Footer />
            </div>
        </div>
    )
}

export default UnitsDashboard;
