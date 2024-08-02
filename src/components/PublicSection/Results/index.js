import Footer from '../Footer/index';
import arrowBack from 'src/assets/Icons/left-thin-icon-mobile.svg';
import arrowRight from 'src/assets/Icons/right-thin-icon-mobile.svg';
import nextUnit from 'src/assets/Icons/right-thin-icon.svg';
import unitLogo from 'src/assets/Icons/unit-section-red.svg';
import './Results.css';
import { getUserData } from 'src/utils/user';
import config from 'src/config';
import React, { useEffect, useState, useRef } from 'react';
import ResultUnit from './ResultUnit.js';
import { useReactToPrint } from 'react-to-print';

const Results = () => {
  const [resultData, setResultData] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const unitTopic = resultData.length && resultData[selectedUnit].topic;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const isMobileView = () => {
    return window.screen.width < 1024;
  };

  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileView());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const callData = async () => {
      const userData = getUserData();
      const baseURL = `${config.baseURL}/reports/student-answers/${userData.uuid}`;
      const response = await fetch(baseURL, {
        headers: {
          token: getUserData().token,
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      const data = await response.json();
      await setResultData(data.results);

      if (data.results.length > 0) {
        setTotalQuestions(data.results[selectedUnit].questions.length);
      }
    };
    callData();
  }, []);

  const changeUnit = (newUnit) => {
    setSelectedUnit(newUnit);
    if (isMobile) {
      setCurrentIndex(0);
      setTotalQuestions(resultData[newUnit].questions.length);
    }
  };

  const renderPaginationCircles = () => {
    return (
      <div className='pagination_circles'>
        {Array.from({ length: totalQuestions }, (_, index) => (
          <div
            key={index}
            className={`circle ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    );
  };

  const questionData = resultData && resultData[selectedUnit]?.questions.map((data, key) => {
    if (isMobile && key !== currentIndex) {
      return null;
    }
    return (
      <ResultUnit
        key={key}
        id={key}
        question={data.question}
        pieChartData={data.answers}
        unitTopic={unitTopic}
        selectedUnit={selectedUnit}
      />
    );
  });

  const unitsArr = ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4'];

  const classUnit = () => {
    const unitsMap = unitsArr.map((data, key) => {
      const className = selectedUnit === key ? "selected" : "";
      return (
        <div className={className} key={key} onClick={() => setSelectedUnit(key)}>
          {data}
        </div>
      );
    });
    return unitsMap;
  };

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentToPrint.current,
    documentTitle: "informe-resultados",
    removeAfterPrint: true,
  });

  const thirdColumn = (topic) => {
    // Margen para mejorar la impresion. Ajustar para otros niveles si corresponde
    if (topic === "Relaciones interpersonales") {
      return "third-column";
    }
  };

  return (
    <div>
      <style type="text/css" media="print">
        {`
          @page {
            size: letter;
          }
        `}
      </style>
      <div className='report_results_content'>
        <div className="content-start__back-link">
          <img src={arrowBack} alt="Arrow" />
          <a onClick={() => window.history.back()}>Volver</a>
        </div>
        <div className="report_result">
          <div className='report_result_title_img' style={{ marginBottom: '15px' }}>
            <img src={unitLogo} alt="unit-logo" />
            <p className='report_result_title'>Informe de resultados </p>
          </div>
          <p className='report_result_text' style={{ marginBottom: '15px' }}> A continuación, encontrarás los resultados de la encuesta aplicada en tu curso.
            Estos datos te muestran un panorama rápido acerca de las debilidades, preocupaciones y
            problemas que está enfrentando el grupo curso, así podrás detectar situaciones preocupantes.
          </p>
          <p className='report_result_text' style={{ marginBottom: '15px' }}>
            Recuerda que comunicar alertas al Equipo de Convivencia puede ser crucial para apoyar a tus estudiantes.
          </p>
        </div>
        <div className='units_graphic_content'>
          <div className='units_pagination'>
            {classUnit()}
          </div>
          <div className='graphic_container'>
            {questionData}
            {isMobile && (
              <React.Fragment>
                <div className='arrow_controls'>
                  {currentIndex > 0 && (
                    <img
                      className='arrow_left'
                      src={arrowBack}
                      alt="Anterior"
                      onClick={() => setCurrentIndex(currentIndex - 1)}
                    />
                  )}
                  {currentIndex < totalQuestions - 1 && (
                    <img
                      className='arrow_right'
                      src={arrowRight}
                      alt="Siguiente"
                      onClick={() => setCurrentIndex(currentIndex + 1)}
                    />
                  )}
                </div>
                <div className='pagination_controls'>
                  {renderPaginationCircles()}
                </div>
              </React.Fragment>
            )}
          </div>

          <div className='button_page_unit'>
            {selectedUnit !== 0 &&
              <div className='button_change_unit_container'>
                <button className='button_change_unit' onClick={() => setSelectedUnit(selectedUnit - 1)}> Anterior </button>
              </div>
            }
            {selectedUnit !== unitsArr.length - 1 &&
              <div className='button_change_unit_container'>
                <button className='button_change_unit' onClick={() => setSelectedUnit(selectedUnit + 1)}>
                  Ir a la siguiente unidad
                  <img src={nextUnit} alt="next-unit" />
                </button>
              </div>
            }
            <div className='button_change_unit_container'>
              <button className='button_change_unit purple' onClick={() => handlePrint(null, () => contentToPrint.current)}> Imprimir </button>
            </div>
          </div>
        </div>
      </div>
      <div className="results-table print-only" ref={contentToPrint}>
        {resultData.map((topicData, topicIndex) => (
          <div key={topicIndex} className="topic-section">
            <h1 className={`topic-title ${thirdColumn(topicData.topic)}`}>{`${topicData.topic}:`}</h1>
            {topicData?.questions?.map((questionData, questionIndex) => (
              <div key={questionIndex} className="question-section">
                <h2 className="question-text">{`${questionIndex + 1}.-${questionData.question}`}</h2>
                <table className="answers-table">
                  <thead>
                    <tr>
                      <th>Respuesta</th>
                      <th>Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questionData.answers.map((answerData, answerIndex) => (
                      <tr key={answerIndex}>
                        <td>{answerData.label}</td>
                        <td>{answerData.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Results;
