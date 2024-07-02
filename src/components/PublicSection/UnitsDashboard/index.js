import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/index';
import ButtonOptions from './ButtonOptions';
import './UnitsDashboard.css';
import Unit from './Unit';
import back from 'src/assets/Icons/back-arrow.svg';
import Class from './ClassMapping';
import http from 'src/services/helpers/http.helper';
import config from 'src/config';
import Spinner from 'src/components/UI/Spinner';
import MobileDropdown from '../MobileDropdown/MobileDropdown';

const UnitsDashboard = () => {
  const [unitsData, setUnitsData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { unitId } = useParams();
  const BASE_URL = config.baseURL;

  useEffect(() => {
    const getData = async () => {
      const req = await http.get(`${BASE_URL}/units/${unitId}/dashboard`);
      await setUnitsData(req.result);
      await setIsFetching(false);
    }
    getData();
  }, []);

  const { number, title, description, objective } = unitsData || [];

  return (
    <div className=''>
      <div className='dashboard-container'>
        <div className="button-container">
          <ButtonOptions />
        </div>
        <button className='profile-back-container back1' onClick={() => window.history.back()}>
          <img src={back} alt='back-icon' />
          Volver
        </button>
        <div className='mobile-dropdown-container'>
          <MobileDropdown section={'Planificación Personalizada'} />
        </div>
        <Unit
          number={number}
          title={title}
          description={description}
          objective={objective}
        />

        { isFetching ? <div className='spinner-units'><Spinner /></div> : <Class unitsData={unitsData.lessons} /> }
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  )
}

UnitsDashboard.displayName = 'UnitsDashboard';

export default UnitsDashboard;
