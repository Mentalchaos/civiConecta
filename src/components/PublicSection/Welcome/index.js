import { getFormattedDate } from 'src/utils/date.js';
import { getUserData } from 'src/utils/user.js';
import calendar from 'src/assets/Icons/calendar-public.svg';
import school from 'src/assets/Icons/school.svg';
import cap from 'src/assets/Icons/graduation-cap.svg';
import man from 'src/assets/images/fraud-protection-hero.png';
import './Welcome.css';
import Letter from 'src/entities/Letter';

const Welcome = ({ userData }) => {
  const { establishment, grade, letter } = userData || {};
  const user = getUserData();

  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <div className="left-container">
          <h3>¡Hola {user.name}!</h3>
          <p className="p-1">
            Ya eres parte de la Civicomunidad, aquí encontrarás todos los recursos que necesitas para tus clases de
            Orientación. Esperamos contribuir en tu labor como docente a cargo de un curso. No dudes en contactarnos si
            nos necesitas.
          </p>
          <p className="p-2">
            Te recomendamos revisar previamente el material y ajustar lo que consideres pertinente, pues nuestro
            programa aborda temas que pueden resultar complejos según el contexto de tus estudiantes.
          </p>
        </div>
        <div className="right-container">
          <div className="second-right-container">
            <div className="date-container">
              <img src={calendar} alt="Icono Calendario" />
              <p>{ getFormattedDate() }</p>
            </div>
            <div className="school-container">
              <img src={school} alt="Icono Escuela" />
              <div className="school-info-container">
                <p>Establecimiento o Institución educativa</p>
                <p className="school-info">{establishment}</p>
              </div>
            </div>
            <div className="grade-container">
              <img src={cap} alt="Icono Curso" />
              <div className="grade-info">
                <p>Nivel del curso</p>
                <p className="grade">{grade} {letter}</p>
              </div>
            </div>
          </div>
        </div>
        <img className="man-image" src={man} alt="Icono Hombre" />
      </div>
    </div>
  );
};

export default Welcome;
