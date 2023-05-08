import Footer from '../Footer/index';
import arrowBack from 'src/assets/Icons/back.svg';
import unitLogo from 'src/assets/Icons/unit-section-red.svg';
import './Results.css';
import { getUserData } from 'src/utils/user';
import config from 'src/config';
import React, { useEffect, useState } from 'react';
import ResultUnit from './ResultUnit.js';

const Results = () => {
  const [resultData, setResultData] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(0);

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
      })
      const data = await response.json();
      await setResultData(data.results);
    }
    callData();
  }, []);

  const questionData = resultData && resultData[selectedUnit]?.questions.map((data, key) => {
    return (
      <ResultUnit
        key={key}
        id={key}
        question={data.question}
        pieChartData={data.answers}
      />
    )
  })

  const classUnit = () => {
    const unitsArr = ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4'];
    const unitsMap = unitsArr.map((data, key) => {
      const className = selectedUnit === key ? "selected" : "";
      return (
        <div className={className} key={key} onClick={() => setSelectedUnit(key)}>
          {data}
        </div>
      )
    })
    return unitsMap;
  };

  return (
    <div>
      <div className='report_results_content'>
        <div className="content-start__back-link">
          <img src={arrowBack} alt="Arrow" />
          <a onClick={() => window.history.back()}>Volver</a>
        </div>
        <div className="report_result">
          <div className='report_result_title_img'>
            <img src={unitLogo} alt="unit-logo" />
            <p className='report_result_title'>Informe de resultados </p>
          </div>
          <p className='report_result_text'> A continuación, encontrarás los resultados de la encuesta aplicada en tu curso.
            Estos datos te muestran un panorama rápido acerca de las debilidades, preocupaciones y
            problemas que está enfrentando el grupo curso, así podrás detectar situaciones preocupantes.
          </p>
          <p className='report_result_text'>
            Recuerda que comunicar alertas al Equipo de Convivencia puede ser crucial para apoyar a tus estudiantes.
          </p>
        </div>
        <div className='units_graphic_content'>
          <div className='units_pagination'>
            {classUnit()}
          </div>
          <div className='graphic_container'>
            {questionData}
          </div>
          <div className='button_go_next_unit_container'>
            <button className='button_go_next_unit'>Ir a la siguiente unidad {'>'} </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results;
