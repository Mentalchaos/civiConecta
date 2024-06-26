import { useEffect, useState } from 'react';
import smileIcon from 'src/assets/Icons/student-survey-smile.svg';
import arrow from 'src/assets/Icons/thin-right.svg';
import warning from 'src/assets/Icons/warning-icon.svg';
import Footer from '../../Footer';
import FirstStep from '../FirstStep/FirstStep';
import Surveys from '../Surveys/Surveys';
import StudentsHeader from './StudentsHeader';
import './StudentSurvey.css';
import config from 'src/config';
import { setUserData, getUserData } from 'src/utils/user';
import { rutValidator } from 'src/utils/rutValidator.js';
import MobileFooter from '../../Footer/MobileFooter';

const StudentSurvey = () => {
  const [changeToFirstStep, setChangeToFirstStep] = useState(false);
  const [isStartSurvey, setIsStartSurvey] = useState(false);
  const [rutValue, setRutValue] = useState('');
  const [catchError, setCatchError] = useState();
  const [isValidRut, setIsValidRut] = useState(false);
  const [studentCompleted, setStudentCompleted] = useState('');

  const checkIfSurveyIsCompleted = async () => {
    const req =
      await fetch(`${config.baseURL}/feedback/student/${rutValue}/status`, { 'Content-Type': 'application/json' })
        .then(response => response.json());
    return req.isSurveyFinished;
  }


  useEffect(() => {
    localStorage.clear();
  }, []);

  const checkUser = async () => {
    try {
      const response = await fetch(`${config.baseURL}/auth/student`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "run": rutValue })
      });

      if (response.ok) {
        const data = await response.json();
        const { name, token, uuid, grade } = data.student;

        const saveData = {
          name,
          email: '',
          role: '',
          active: '',
          token,
          grade
        };

        setUserData(saveData, uuid);
        const userData = getUserData();

        const feedbackResponse = await fetch(`${config.baseURL}/feedback/student/${uuid}`, {
          method: 'GET',
          headers: {
            token: userData.token
          }
        });
        if (feedbackResponse.ok) {
          setChangeToFirstStep(true);
        } else {
          throw new Error('Error al obtener los datos de feedback del estudiante');
        }
      } else {
        throw new Error('Error al autenticar al estudiante');
      }
    } catch (error) {
      setCatchError(error);
    }
  };

  useEffect(() => {
    setChangeToFirstStep(false);
  }, []);


  const handleInserRutClick = async () => {
    const checkedSurvey = await checkIfSurveyIsCompleted();
    if (checkedSurvey == 1) {
      return setStudentCompleted(true);
    }

    if (rutValue.length < 8) {
      return;
    }
    await setStudentCompleted(false);
    await checkUser();
  };


  const handleRut = (e) => {
    if (e.match(/[^0-9kK]/g)) {
      return;
    }

    // rutValidator no esta validando correctamente
    setRutValue(e);
    return rutValidator(e) ? setIsValidRut(true) : setIsValidRut(false);
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '175px',
    height: '40px',
    fontFamily: 'Nunito, sans-serif',
    color: '#FFFFFF',
    backgroundColor: isValidRut ? '#7560E8' : '#D5D1F6',
    borderRadius: '20px',
    borderStyle: 'none',
    cursor: isValidRut ? 'pointer' : 'not-allowed',
  };

  return (
    <>
      <StudentsHeader />
      <main className="survey-content-container student">
        {!isStartSurvey && !changeToFirstStep && (
          <div className="students-survey-container">
            <div className="students-left">
              <div className="image-container"></div>
            </div>
            <div className="students-right">
              <div className="students-text-container">
                <div className="students-title-container">
                  <img src={smileIcon} alt='smileIcon' />
                  <p>¡Hola!</p>
                </div>
                <div className="students-info-container">
                  <p>Por favor ingresa tu RUT para que puedas iniciar tu encuesta CiviConecta.</p>
                </div>
                <div className="id-container">
                  <div className="id-one">
                    <p>RUT</p>
                    <input
                      maxLength={10}
                      className="rut-input"
                      placeholder="10100100k"
                      value={rutValue}
                      onChange={(e) => handleRut(e.target.value.toUpperCase())}
                    />
                  </div>
                  {catchError && (
                    <div className="id-two">
                      <img src={warning} alt='warning' />
                      <p>
                        El RUT que ingresaste no es válido.
                        <br />
                        Verifíca que esté bien escrito y vuelve a intentarlo.
                      </p>
                    </div>
                  )}
                  {studentCompleted && (
                    <div className="id-two">
                      <img src={warning} alt='warning' />
                      <p>
                        La encuesta al rut asociado se encuentra completada!
                        <br />
                        Si crees que esto es un error consultalo con tu profesor.
                      </p>
                    </div>
                  )}

                </div>
                <div className="students-button">
                  <button onClick={handleInserRutClick} style={buttonStyle}>
                    Ingresar RUT
                    <img src={arrow} alt='arrow' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {changeToFirstStep && !isStartSurvey && <FirstStep type={'student'} setIsStartSurvey={setIsStartSurvey} />}
        {isStartSurvey && <Surveys userType={'student'} />}

      </main>
      <div className='students-footer-container' style={{ padding: '0 2.4em' }}>
        <Footer />
      </div>
      <div className='students-mobile-footer-cont'>
        <MobileFooter />
      </div>
    </>
  );
};

StudentSurvey.displayName = 'StudentSurvey';

export default StudentSurvey;
