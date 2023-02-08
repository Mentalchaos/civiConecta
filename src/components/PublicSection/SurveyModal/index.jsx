import modalImage from 'src/assets/images/modal-image.png';
import closeButton from 'src/assets/images/close-popup.svg';
import teacher from 'src/assets/Icons/teacher-white.svg';
import student from 'src/assets/Icons/student-purple.svg';
import './SurveyModal.css';

const SurveyModal = () => {
  return (
    <div className='survey-modal-container'>
      <div className='survey-modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <div className='modal-title'>
              <h2>Comencemos</h2>
            </div>
            <div className='modal-header-img'>
              <img className='modal-image' src={modalImage}></img>
              <img className='close-button' src={closeButton}></img>
            </div>
          </div>
          <div className='modal-paragraph'>
            <p>Para que puedas acceder a tus planificaciones personalizadas es necesario que continues con los siguientes pasos:</p>
          </div>
          <div className='survey-buttons-container'>
            <div className='teacher-survey-button'>
              <div className='teacher-button-header'>
                <p>Contestar encuesta docente</p>
                <img src={teacher} />
              </div>
              <div className='teacher-button-footer'>
                <p>Ir a la encuesta</p>
              </div>
            </div>
            <div className='student-survey-button'>
              <div className='student-button-header'>
                <p>Generar enlace para encuestar estudiantes</p>
                <img src={student} />
              </div>
              <div className='student-button-footer'>
                <p>Generar enlace</p>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <p>Omitir encuestas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveyModal;