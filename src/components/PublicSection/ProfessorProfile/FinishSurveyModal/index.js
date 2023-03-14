import modalImage from 'src/assets/images/finish-modal-image.png';
import closeButton from 'src/assets/images/close-popup.svg';
import right from 'src/assets/Icons/thin-right.svg';

import './FinishSurveyModal.css';

const FinishSurveyModal = ({ onClick }) => {

  // TODO Modificar "disabled", para que se deshabilite el botón cuando la data no venga como corresponde
  const disabled = true;

  return (
    <div className='finish-modal-container'>
      <div className='finish-modal'>
        <div className='finish-modal-content'>
          <div className='finish-modal-header'>
            <div className='finish-modal-title'>
              <h2>Estás por terminar</h2>
            </div>
            <div className='finish-modal-header-img'>
              <img className='finish-modal-image' src={modalImage} alt="modal"></img>
              <img onClick={onClick} className='finish-close-button' src={closeButton} alt="close-button"></img>
            </div>
          </div>
          <div className='finish-modal-paragraph'>
            <p>
            ¿Quieres finalizar la encuesta aplicada a tu curso y generar los informes? Ten en cuenta
            que si lo haces finalizarás el proceso de encuestar a tus estudiantes, y quienes no hayan
            respondido ya no podrán hacerlo.
            </p>
          </div>
          <div className='finish-survey-buttons-container'>
              <div onClick={onClick} className='keep-open'>
                <p>Mantener encuesta abierta</p>
                <img src={right} alt="arrow-icon"/>
              </div>
              <div className='keep-open' style={{background: disabled ? '#aba4ed' : '#7468e2', cursor: 'not-allowed'}}>
                <p>Finalizar y generar informes</p>
                <img src={right} alt="arrow-icon" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishSurveyModal;
