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
import { useParams } from 'react-router-dom';

const toSearchWords = (item) => {
  const words = item.keywords.map(k => k.split('-')).flat();

  return {
    ...item,
    searchTerms: [item.title, ...words].map(s => s.toLowerCase().trim()),
    hasSearchTerm(keyword) {
      const term = keyword.toLowerCase().trim();
      return !!this.searchTerms.filter(t => t.indexOf(term) > -1).length;
    }
  };
};


const SituationsDashboard = () => {
  const [emergentData, setEmergentData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { gradeId } = useParams();

  const getSituations = async () => {
    const baseUrl = `${config.baseURL}/events/1/grade/${gradeId}`;
    const response = await fetch(baseUrl, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: 'GET'
    })
    const data = await response.json();
    setEmergentData(data.events.map(toSearchWords));
  };

  useEffect(() => {
    getSituations();
  }, []);

  const filtered = emergentData && emergentData.filter(item => item.hasSearchTerm(inputValue));
  const emergData = emergentData && !filtered.length ? emergentData : filtered;

  return (
    <div className="situations-section">
      <button className="profile-back-container" onClick={() => window.history.back()}>
        <img src={back} alt="go-back" />
        Volver
      </button>
      <div className="situations">
        <div className="situations-cont">
          <div className="situations-header">
            <img className="situations-image" src={brain} alt="logo" />
            <div className="situations-header-text">
              <p>Situaciones emergentes</p>
            </div>
          </div>
          <div className="situations-description-container">
            <div className="situations-description">
              <img className="book-icon" src={unitGreen} alt="situations-icon" />
              <div className="situations-info">
                <div className="situations-desc-title">Descripción:</div>
                <div className="situations-desc-text">Clases para profundizar y complementar temáticas ya abordadas en unidades anteriores,
                  además de posibles conflictos que se dan en el aula. Utiliza el buscador para encontrar clases
                  atingentes con las temáticas que necesites.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="situations-search">
        <SearchBar
          inputValue={inputValue}
          onChange={setInputValue}
        />
      </div>
      <div className="classes-container">
        <div className="classes-section">

          {emergData.map((data, key) => (
            <EmergentSituation
              key={data.id}
              id={key + 1}
              lessonId={data.lessonId}
              title={data.title}
              description={data.description}
              date={data.date}
              tags={data.searchTerms}
            />
          ))}

        </div>
      </div>
      <Footer />
    </div>
  )
};

SituationsDashboard.displayName = 'SituationsDashboard';

export default SituationsDashboard;
