import logo from 'src/assets/Icons/to-begin.svg';
import arrow from 'src/assets/images/right-red.svg';
import './PlanificationText.css';

const PlanificationText = () => {
  return (
    <div className="planification-container planning-text">
      <div>
        <div className="planification-header">
          <img src={logo} alt="logo" />
          <p className="to-begin-text">Para comenzar</p>
        </div>
        <div>
          <p className="planification-subtitle" style={{marginTop: '20px'}}>
            Tienes dos alternativas para implementar nuestra planificación
            anual:
          </p>
        </div>
        <div className="alternatives-container">
          <div className="alternative">
            <img src={arrow} alt="arrow" />
            <p>
              Personalizada, reorganiza las unidades de acuerdo con las
              necesidades de tu curso. Para esta opción, tanto tú como tus
              estudiantes, deben responder una encuesta.
            </p>
          </div>
          <div className="alternative">
            <img src={arrow} alt="arrow" />
            <p>
              Estandarizada, respeta la organización ministerial de las unidades.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="planification-container-two">
          <img src={logo} alt="logo"/>
          <p className="one-step-custom">Estás a un paso de obtener tu planificación personalizada:</p>
        </div>
      </div>
    </div>
  );
};

export default PlanificationText;
