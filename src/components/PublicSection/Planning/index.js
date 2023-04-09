import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Footer/index';
import UnitContent from './UnitContent/UnitContent';
import http from '../../../services/helpers/http.helper';
import config from 'src/config';
import './Planning.css';


const Planning = () => {
  const { planningId, title } = useParams();
  const [planningData, setPlanningData] = useState([]);

  useEffect(() => {

    (async function _ (){
      const baseUrl = `${config.baseURL}/lessons/${planningId}`;
        const data = await http.get(baseUrl);
        setPlanningData(data.lesson);
    }());
  }, []);

  return (
    <div>
      <UnitContent planningData={planningData} title={title} />
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  )
}

export default Planning;
