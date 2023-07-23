import React, { useEffect, useState } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';

import Footer from '../Footer/index';
import EmergentSituation from './components/EmergentSituation';
import SearchBar from './components/SearchBar';

import brain from '../../../assets/Icons/white-brain.svg';
import unitGreen from '../../../assets/Icons/unit-green2.svg';
import back from 'src/assets/Icons/back-arrow.svg';
import './SituationsDashboard.css';

const SituationsDashboard = () => {

  const [emergentData, setEmergentData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getSituations = async () => {
    const baseUrl = `${config.baseURL}/events/1`;
    const response = await fetch(baseUrl, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: 'GET'
    })
    const data = await response.json();
    setEmergentData(data.events);
  };
  useEffect(() => {
    getSituations();
  }, []);

  const filtered = emergentData && emergentData.filter(data => data.title == inputValue);
  const emergData = emergentData && !filtered.length ? emergentData : filtered;

  return (
    <div className='situations-section'>
      <button className='profile-back-container' onClick={() => window.history.back()}>
        <img src={back} alt='go-back' />
        Volver
      </button>
      <div className="situations">
        <div className='situations-cont'>
          <div className='situations-header'>
            <img className='situations-image' src={brain} alt='logo'></img>
            <div className='situations-header-text'>
              <p>Situaciones emergentes</p>
            </div>
          </div>
          <div className='situations-description-container'>
            <div className='situations-description'>
              <img className='book-icon' src={unitGreen} alt='situations-icon' />
              <div className='situations-info'>
                <div className='situations-desc-title'>Descripción:</div>
                <div className='situations-desc-text'>Clases para profundizar y complementar temáticas ya abordadas en unidades anteriores,
                  además de posibles conflictos que se dan en el aula. Utiliza el buscador para encontrar clases
                  atingentes con las temáticas que necesites.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='situations-search'>
        <SearchBar
          inputValue={inputValue}
          onChange={setInputValue}
        />
      </div>
      <div className="classes-container">
        <div className="classes-section">

          {emergData.map((data) => (
            <EmergentSituation
              key={data.id}
              id={data.id}
              lessonId={data.lessonId}
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

export default SituationsDashboard;
