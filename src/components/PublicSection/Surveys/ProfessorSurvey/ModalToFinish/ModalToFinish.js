const ModalToFinish = () => {
  return (
    <div className="survey-modal-container">
      <div className="survey-modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <h2>Estás por terminar</h2>
            </div>
            <div className="modal-header-img">
              <img className="modal-image" src={modalImage} alt="modal"></img>
              <img onClick={closeModal} className="close-button" src={closeButton} alt="close-button"></img>
            </div>
          </div>
          <div className="modal-paragraph">
            <p>
              Para que puedas acceder a tus planificaciones personalizadas es necesario que continues con los siguientes
              pasos:
            </p>
          </div>
          <div className="survey-buttons-container">
            <div className="teacher-survey-button" onClick={() => redirect('/professor-survey')}>
              <div className="teacher-button-header">
                <p>Contestar encuesta docente</p>
                <img src={teacher} alt="teacher" />
              </div>
              <div className="teacher-button-footer">
                <p>Ir a la encuesta</p>
              </div>
            </div>
            <div className="student-survey-button" onClick={() => redirect('/share-survey')}>
              <div className="student-button-header">
                <p>Generar enlace para encuestar estudiantes</p>
                <img src={student} alt="student" />
              </div>
              <div className="student-button-footer">
                <p>Generar enlace</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <p onClick={closeModal} className="footer-text">
              Omitir encuestas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToFinish;

ModalToFinish.displayName = 'ModalToFinish';
