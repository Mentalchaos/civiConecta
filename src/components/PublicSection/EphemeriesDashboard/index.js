import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green.svg';
import Footer from '../Footer/index';
import './EphemeriesDashboard.css';
import EphemerisDate from './components/EphemerisDate';
import config from 'src/config';
import React, { useEffect, useState } from 'react';
import { getUserData } from 'src/utils/user';

const EphemeriesDashboard = () => {

  const [EphemeriesData, setEphemeriesData] = useState([])

  const getEphemeries = async () => {
    const baseUrl = `${config.baseURL}/events/2`
    const response = await fetch(baseUrl, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: 'GET'
    })
    const data = await response.json()
    setEphemeriesData(data)
  };
  useEffect(() => {
    getEphemeries();
  }, []);

  return (
    <div className='ephemeris-section'>
      <div className="ephemeris">
        <div className='ephemeris-cont'>
          <div className='ephemeris-header'>
            <img className='ephemeris-image' src={brain} alt='logo'></img>
            <div className='ephemeris-header-text'>
              <p>Efemérides</p>
            </div>
          </div>
          <div className='ephemeris-description-container'>
            <div className='ephemeris-description'>
              <img className='book-icon' src={unitGreen} alt='' />
              <div className='ephemeris-info'>
                <div className='ephemeris-desc-title'>Descripción:</div>
                <div className='ephemeris-desc-text'>Nuestro programa incluye la planificación del siguiente listado de efemérides, de acuerdo con la
                  propuesta del Ministerio de Educación, en la resolución exenta nº 002329 que establece calendario
                  escolar para establecimientos educacionales de la Región Metropolitana.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dates-container">
        <div className="dates-section">

          {EphemeriesData.events && EphemeriesData.events.map((data) => (
            <EphemerisDate
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              date={data.date}
            />
          ))}


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EphemeriesDashboard;
