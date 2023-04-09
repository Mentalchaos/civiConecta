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

const StudentSurvey = () => {
  const [changeToFirstStep, setChangeToFirstStep] = useState(false);
  const [isStartSurvey, setIsStartSurvey] = useState(false);
  const [rutValue, setRutValue] = useState('');
  const [isValidRut, setIsValidRut] = useState(false);
  const [showInvalidRutError, setShowInvalidRutError] = useState(false);

  const checkUser = () => {
    const resp = async () =>
    await fetch(`${config.baseURL}/auth/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"run": rutValue})
    }).then(e => e.json()).then(res => {

      const { name, token, uuid } = res.student;
      const saveData = {
        name,
        email: '',
        role: '',
        active: '',
        token
      };

      setUserData(saveData, uuid);
    }).then(async () => {
      const userData = getUserData();
      const uuid = userData.uuid;
      await fetch(`${config.baseURL}/feedback/student/${uuid}`, {
        method: 'POST'
      }).then(response => console.log('response', response))
    });
    resp();
  }

  const validateRut = (rut) => {
    const regex = /^(\d{1,2}(\.?\d{3}){2})-([\dkK])$/;
    return regex.test(rut);
  };

  const handleRutChange = (event) => {
    const value = event.target.value;
    setRutValue(value);
    setIsValidRut(validateRut(value));
    setShowInvalidRutError(false);
  };

  useEffect(() => {
    setChangeToFirstStep(false);
  }, []);

  const handleIngresarRutClick = async () => {
    if(isValidRut){
      await checkUser();
      setChangeToFirstStep(true);
    } else {
      setShowInvalidRutError(true);
    }
  }

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '175px',
    height: '40px',
    fontFamily: 'Nunito Sans, sans-serif',
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
                  <img src={smileIcon} />
                  <p>¡Hola!</p>
                </div>
                <div className="students-info-container">
                  <p>Por favor ingresa tu RUT para que puedas iniciar tu encuesta CiviConecta.</p>
                </div>
                <div className="id-container">
                  <div className="id-one">
                    <p>RUT</p>
                    <input
                      className="rut-input"
                      placeholder="00.000.000-k"
                      value={rutValue}
                      onChange={handleRutChange}
                    />
                  </div>
                  {showInvalidRutError && (
                    <div className="id-two">
                      <img src={warning} />
                      <p>
                        El RUT que ingresaste no es válido.
                        <br />
                        Verifíca que esté bien escrito y vuelve a intentarlo.
                      </p>
                    </div>
                  )}
                </div>
                <div className="students-button">
                  <button onClick={handleIngresarRutClick} style={buttonStyle}>
                    Ingresar RUT
                    <img src={arrow} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {changeToFirstStep && !isStartSurvey && <FirstStep type={'student'} setIsStartSurvey={setIsStartSurvey} />}
        {isStartSurvey && <Surveys userType={'student'} />}

      </main>
      <div style={{ padding: '0 2.4em' }}>
        <Footer />
      </div>
    </>
  );
};

StudentSurvey.displayName = 'StudentSurvey';

export default StudentSurvey;
