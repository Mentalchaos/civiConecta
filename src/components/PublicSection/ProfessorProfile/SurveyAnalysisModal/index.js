import modalImage from 'src/assets/images/analysis-image.png';
import closeButton from 'src/assets/images/close-popup.svg';
import PieChart from './PieChart';

import './SurveyAnalysisModal.css';

const colors = ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'];

const SurveyAnalysisModal = ({ onClick, dataPieChart, criticalData, id }) => {
  const eaea = criticalData.find(data => data.questionId == id).description || '';

  return (
    <div className='analysis-modal-container'>
      <div className='analysis-modal'>
        <div className='analysis-modal-content'>
          <div className='analysis-modal-header'>
            <div className='analysis-modal-title'>
              <h2>Análisis encuesta estudiantes</h2>
            </div>
            <div className='analysis-modal-header-img'>
              <img className='analysis-modal-image' src={modalImage} alt="modal"></img>
              <img onClick={onClick} className='analysis-close-button' src={closeButton} alt="close-button"></img>
            </div>
          </div>
          <div className='mobile-analysis-modal-title'>
              <p>Análisis encuesta estudiantes</p>
            </div>
          <div className='analysis-modal-paragraph'>
            <p>
              {eaea}
            </p>
          </div>
          <div className='data-pie-chart-container'>
            <div className='data-pie-chart-text'>
              {
                dataPieChart && dataPieChart.map((data, index) => (
                  <div key={index} className='square-text-graphic'>
                    <div
                      className='square-graphic'
                      style={{ backgroundColor: colors[index] }}
                    />
                    <div className='data-pie-text'>
                      {data.label}
                    </div>
                  </div>
                ))
              }
            </div>
            <div id='app' className='data-pie-chart'>
              <PieChart
                dataPieChart={dataPieChart}
              />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}


SurveyAnalysisModal.displayName = 'SurveyAnalysisModal';

export default SurveyAnalysisModal;
