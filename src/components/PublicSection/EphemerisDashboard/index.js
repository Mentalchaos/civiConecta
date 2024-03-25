import React, { useEffect, useState } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import Footer from '../Footer/index';
import EphemerisDate from './components/EphemerisDate';
import back from 'src/assets/Icons/back-arrow.svg';
import brain from '../../../assets/Icons/white-brain.svg';
import ephemerisDescription from '../../../assets/Icons/ephemeris-description-icon.svg';
import './EphemeriesDashboard.css';
import { useParams } from 'react-router-dom';
import MobileDropdown from '../MobileDropdown/MobileDropdown';

const EphemerisDashboard = () => {
  const [EphemerisData, setEphemerisData] = useState([]);
  const { gradeId } = useParams();

  const getEphemeris = async () => {
    const baseUrl = `${config.baseURL}/events/2/grade/${gradeId}`;
    const response = await fetch(baseUrl, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: 'GET'
    })
    const data = await response.json()
    setEphemerisData(data.events)
  };
  useEffect(() => {
    getEphemeris();
  }, []);

  const compareDates = (a, b) => {
    const [dayA, monthA] = a.date.split("-").map(Number);
    const [dayB, monthB] = b.date.split("-").map(Number);

    if (monthA !== monthB) {
      return monthA - monthB;
    }

    return dayA - dayB;
  }

  EphemerisData.sort(compareDates);

  return (
    <div className='ephemeris-section'>
      <button className='profile-back-container' onClick={() => window.history.back()}>
        <img src={back} alt='go-back' />
        Volver
      </button>
      <div className='mobile-dropdown-container'>
        <MobileDropdown section={'Efemérides'} />
      </div>
      <div className="ephemeris">
        <div className='ephemeris-cont'>
          <div className='ephemeris-header'>
            <img className='ephemeris-image' src={brain} alt='logo'></img>
            <div className='ephemeris-header-text'>
              <p>Efemérides</p>
            </div>
          </div>
          <div className='ephemeris-description-container'>
            <div className='mobile-ephemeris-description'>
              <div className='mobile-ephemeris-header'>
                <img className='book-icon' src={ephemerisDescription} alt='' />
                <p className='ephemeris-desc-title'>Descripción:</p>
              </div>
              <div>
                <p>
                Nuestro programa incluye la planificación del siguiente listado de efemérides, 
                de acuerdo con la propuesta del Ministerio de Educación, en la resolución vigente 
                que establece calendario escolar para establecimientos educacionales del país.
                </p>
              </div>
            </div>
            <div className='ephemeris-description'>
              <img className='book-icon' src={ephemerisDescription} alt='' />
              <div className='ephemeris-info'>
                <div className='ephemeris-desc-title'>Descripción:</div>
                <div className='ephemeris-desc-text'>
                  Nuestro programa incluye la planificación del siguiente listado de efemérides, 
                  de acuerdo con la propuesta del Ministerio de Educación, en la resolución vigente 
                  que establece calendario escolar para establecimientos educacionales del país.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dates-container">
        <div className="dates-section">
          {EphemerisData && EphemerisData.map((data) => (
            <EphemerisDate
              key={data.id}
              id={data.lessonId}
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

export default EphemerisDashboard;
