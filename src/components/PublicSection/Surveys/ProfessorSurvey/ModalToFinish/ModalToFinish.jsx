import modalImage from 'src/assets/images/modal-survey-image.png';
import closeButton from 'src/assets/images/close-popup.svg';

const ModalToFinish = ({ closeModal, finishSurvey, userType }) => {
  const redirect = section => (window.location.href = section);
  return (
    <div className="survey-modal-container">
      <div className="survey-modal">
        <div className="modal-content" style={{ width: '600px', height: '370px', justifyContent: 'initial' }}>
          <div
            className="modal-header professor-survey"
            style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
          >
            <div className="modal-title">
              <h1 style={{ fontSize: '32px' }}>Estás por terminar</h1>
            </div>
            <div className="modal-header-img">
              <img
                style={{ width: '108px', top: '-40px', right: '95px' }}
                className="modal-image"
                src={modalImage}
                alt="modal"
              ></img>
              <img onClick={closeModal} className="close-button" src={closeButton} alt="close-button"></img>
            </div>
          </div>
          <div className="modal-paragraph">
            <p style={{ fontSize: '14px', marginTop: 30, color: 'rgb(0,0,0,0.7)' }}>
              ¿Quieres ﬁnalizar la encuesta y guardar tus respuestas? Ten en cuenta que si lo haces, ya no podrás
              modiﬁcarlas.
            </p>
          </div>

          <section className="modal__actions-container">
            <button className="actions__second" onClick={() => userType == 'teacher' ? redirect('/public/') : redirect('/')} >
              Continuar en otro momento
            </button>
            <button className="actions__second" onClick={finishSurvey}>
              Finalizar y cerrar respuestas
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalToFinish;

ModalToFinish.displayName = 'ModalToFinish';
