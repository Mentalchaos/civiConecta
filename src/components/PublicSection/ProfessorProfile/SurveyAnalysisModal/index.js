import modalImage from 'src/assets/images/analysis-image.png';
import closeButton from 'src/assets/images/close-popup.svg';
import PieChart from './PieChart';

import './SurveyAnalysisModal.css';

const SurveyAnalysisModal = ({ onClick }) => {
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
          <div className='analysis-modal-paragraph'>
            <p>
            ¿Cómo calificarías tu capacidad para reconocer tus cualidades y habilidades, por ejemplo: 
            honestidad, respeto, sensibilidad, responsabilidad, solidaridad, comunicación, motivación, 
            paciencia, trabajo en equipo, etc.?
            </p>
          </div>
          <div id='app'>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveyAnalysisModal;