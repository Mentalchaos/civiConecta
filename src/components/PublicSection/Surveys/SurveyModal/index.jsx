import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import modalImage from 'src/assets/images/modal-image.png';
import closeButton from 'src/assets/images/close-popup.svg';
import teacher from 'src/assets/Icons/teacher-white.svg';
import studentImg from 'src/assets/Icons/student-purple.svg';
import './SurveyModal.css';

const SurveyModal = ({ closeModal, teacherSurveyOnclick, gradeId }) => {

  const navigate = useNavigate();
  // Borrar boton de docente o estudiante basandose si la encuesta fue contestada o no

  const teacherSurveyButton = async () => {
    await teacherSurveyOnclick();
    navigate(`/public/professor-survey/${gradeId}`);
  };

  return (
    <div className='survey-modal-container'>
      <div className='survey-modal'>
        <div className='modal-content'>
          <div className='modal-header' style={{borderRadius: '10px 10px 0 0'}}>
            <div className='modal-title'>
              <h2>Comencemos</h2>
            </div>
            <div className='modal-header-img'>
              <img className='modal-image' src={modalImage} alt="modal"></img>
              <img onClick={closeModal} className='close-button' src={closeButton} alt="close-button"></img>
            </div>
          </div>
          <div className='modal-paragraph' style={{marginTop: '20px', marginBottom: '20px'}}>
            <p>Para que puedas acceder a tus planificaciones personalizadas es necesario que continues con los siguientes pasos:</p>
          </div>
          <div className='survey-buttons-container'>
            <div className='teacher-survey-button' style={{padding: '1em'}}onClick={() => teacherSurveyButton()}>
              <div className='teacher-button-header'>
                <p>Contestar encuesta docente</p>
                <img src={teacher} alt="teacher"/>
              </div>
              <div className='teacher-button-footer'>
                <p>Ir a la encuesta</p>
              </div>
            </div>
            <div className='student-survey-button' style={{padding: '1em', border: '1px solid black'}} onClick={() => navigate('/public/share-survey')}>
              <div className='student-button-header'>
                <p>Generar enlace para encuestar estudiantes</p>
                <img src={studentImg} alt="student" />
              </div>
              <div className='student-button-footer'>
                <p>Generar enlace</p>
              </div>
            </div>
          </div>
          <div className='modal-footer' style={{marginTop: '30px', marginBottom: '30px'}}>
            <p onClick={closeModal} className='footer-text'>Omitir encuestas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SurveyModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};

SurveyModal.displayName = 'SurveyModal';

export default SurveyModal;
