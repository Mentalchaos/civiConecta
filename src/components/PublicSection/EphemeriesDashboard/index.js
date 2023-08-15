import React, { useEffect, useState } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import Footer from '../Footer/index';
import EphemerisDate from './components/EphemerisDate';
import back from 'src/assets/Icons/back-arrow.svg';
import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-blueligth.svg';
import './EphemeriesDashboard.css';
import { useParams } from 'react-router-dom';

const EphemeriesDashboard = () => {
  const [EphemeriesData, setEphemeriesData] = useState([]);
  const { gradeId } = useParams();

  const getEphemeries = async () => {
    const baseUrl = `${config.baseURL}/events/2/grade/${gradeId}`;
    const response = await fetch(baseUrl, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: 'GET'
    })
    const data = await response.json()
    setEphemeriesData(data.events)
  };
  useEffect(() => {
    getEphemeries();
  }, []);

  const compareDates = (a, b) => {
    const [dayA, monthA] = a.date.split("-").map(Number);
    const [dayB, monthB] = b.date.split("-").map(Number);

    if (monthA !== monthB) {
      return monthA - monthB;
    }

    return dayA - dayB;
  }

  EphemeriesData.sort(compareDates);

  return (
    <div className='ephemeris-section'>
      <button className='profile-back-container' onClick={() => window.history.back()}>
        <img src={back} alt='go-back' />
        Volver
      </button>
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
                <div className='ephemeris-desc-text'>
                  Nuestro programa incluye la planificación del siguiente listado de efemérides, de acuerdo con la
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
          {EphemeriesData && EphemeriesData.map((data) => (
            <EphemerisDate
              key={data.id}
              id={data.id}
              title={data.title}
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
