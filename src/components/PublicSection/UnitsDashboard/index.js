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

  const { number, title, description } = unitsData || [];

  return (
    <div className=''>
      <div className='dashboard-container'>
        <ButtonOptions />
        <button className='profile-back-container back1'>
          <img src={back} alt='back-icon' />
          Volver
        </button>
        <Unit
          number={number}
          title={title}
          description={description}
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
