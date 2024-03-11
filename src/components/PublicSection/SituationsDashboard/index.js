import React, { useEffect, useState } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';

import Footer from '../Footer/index';
import EmergentSituation from './components/EmergentSituation';
import SearchBar from './components/SearchBar';

import brain from '../../../assets/Icons/white-brain.svg';
import emergentsIcon from '../../../assets/Icons/emergents-icon.svg';
import left from '../../../assets/Icons/left-thin-icon.svg';
import right from '../../../assets/Icons/right-thin-icon.svg';
import back from 'src/assets/Icons/back-arrow.svg';
import './SituationsDashboard.css';
import { useParams } from 'react-router-dom';
import MobileDropdown from '../MobileDropdown/MobileDropdown';

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

const ITEMS_PER_PAGE = 6;

const SituationsDashboard = () => {
  const [emergentData, setEmergentData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [isMobile, setIsMobile] = useState(false);
  const { gradeId } = useParams();
  const filteredData = inputValue.length == 0 ? false : emergentData?.filter((e) => e.title.toLowerCase().match(inputValue));

  console.log('emergentData', emergentData);

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

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   setTotalPages(Math.ceil(emergentData.length / ITEMS_PER_PAGE));
  // }, [emergentData]);

  // const goToPrevPage = () => {
  //   setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  // };

  // const goToNextPage = () => {
  //   setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  // };

  // let data = [...emergentData]

  // data.forEach((item, index) => {
  //   item.number = index + 1;
  // });

  //const currentData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // useEffect(() => {
  //   const setMobileOrDesktop = window.screen.width < 1024 ? true : false;
  //   setIsMobile(setMobileOrDesktop);
  // }, [])

  //const mobileOrDesktop = isMobile ? currentData : emergentData;

  // Se debe separarar la logica de mobile y la de desktop para que ambas puedan coincidir

  return (
    <div className="situations-section">
      <div className='back-button-container'>
        <button className="profile-back-container" onClick={() => window.history.back()}>
          <img src={back} alt="go-back" />
          Volver
        </button>
      </div>
      <div className='mobile-dropdown-container'>
        <MobileDropdown section={'Situaciones Emergentes'} />
      </div>
      <div className="situations">
        <div className="situations-cont">
          <div className="situations-header">
            <img className="situations-image" src={brain} alt="logo" />
            <div className="situations-header-text">
              <p>Situaciones emergentes</p>
            </div>
          </div>
          <div className="mobile-situations-container">
            <div className="mobile-situations-description">
              <div className='situations-description'>
                <img className="book-icon" src={emergentsIcon} alt="situations-icon" />
                <p className="situations-desc-title">Descripción:</p>
              </div>
              <div className="situations-info">
                <p className="situations-desc-text">Clases para profundizar y complementar temáticas ya abordadas en unidades anteriores,
                  además de posibles conflictos que se dan en el aula. Utiliza el buscador para encontrar clases
                  atingentes con las temáticas que necesites.
                </p>
              </div>
            </div>
          </div>
          <div className="situations-description-container">
            <div className="situations-description">
              <img className="book-icon" src={emergentsIcon} alt="situations-icon" />
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
      { filteredData.length > 0 ?
          <div className="classes-section">
            {filteredData.map((data) => (
              <EmergentSituation
                key={data.id}
                id={data.number}
                lessonId={data.lessonId}
                title={data.title}
                description={data.description}
                date={data.date}
                tags={data.searchTerms}
              />
            ))}
          </div> :
          <div className="classes-section">
            {emergentData.map((data) => (
              <EmergentSituation
                key={data.id}
                id={data.number}
                lessonId={data.lessonId}
                title={data.title}
                description={data.description}
                date={data.date}
                tags={data.searchTerms}
              />
            ))}
          </div>}
      </div>
      {/* <div className="pagination-container">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          <img className='paginator-button' src={left} />
        </button>
        <span>{currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <img className='paginator-button' src={right} />
        </button>
      </div> */}
      <Footer />
    </div>
  )
};

SituationsDashboard.displayName = 'SituationsDashboard';

export default SituationsDashboard;
