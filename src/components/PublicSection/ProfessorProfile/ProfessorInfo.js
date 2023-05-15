import { useState, useEffect } from 'react';
import { clearUserData, getUserData } from 'src/utils/user';
import config from 'src/config';
import DisguisedInput from './DisguisedInput.js';
import ModalTrigger from './ModalTrigger';
import MenuDocenteIcon from 'src/assets/Icons/menu-docente.svg';
import profile from 'src/assets/Icons/profile-image.svg';
import finishImage from 'src/assets/images/finish-survey.png';
import report from 'src/assets/images/report-container.png';
import './professor-profile.css';
import { useNavigate } from 'react-router-dom';

const ProfessorInfo = ({ onClick }) => {
  const [userData, setUserData] = useState({});
  const [surveyData, setSurveyData] = useState({})
  const currentUser = getUserData();

  const navigate = useNavigate();

  const getSurveyData = async () => {
    const userData = getUserData();
    const baseURL = `${config.baseURL}/feedback/status/${userData.uuid}`

    const response = await fetch(baseURL, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    const data = await response.json();
    setSurveyData(data.status);
  };

  useEffect(() => {
    getSurveyData()
  }, []);

  useEffect(() => {
    const userData = getUserData();

    fetch(`${config.baseURL}/establishments/info/${userData.uuid}`, {
      headers: {
        token: userData.token
      }
    })
      .then(d => d.json())
      .then(data => setUserData(data.info))
  }, [])

  const data = [
    {
      label: "Email",
      value: currentUser.email
    }, {
      label: "Institución",
      value: userData.establishment
    }, {
      label: "Curso",
      value: userData.grade,
      letter: userData.letter
    }
  ];

  const inputs = data.map(input =>
    <DisguisedInput
      key={input.label}
      label={input.label}
      value={input.value}
      letter={input.letter}
    />
  );

  return (
    <div className="professor-info-container">
      <div className='professor-info-title'>
        <img className='professor-profile-img' src={profile} alt="professor-profile-img" />
        <p>Perfil</p>
      </div>
      <div className="professor-info-data">
        <div className="professor-info-data-cont">
          <img src={MenuDocenteIcon} alt="menu-icon" />
          <p className="professor-info-name">{currentUser.name}</p>
          <p className="professor-info-type">Docente</p>
        </div>
        <div className="disguised-inputs-cont">
          {inputs}
        </div>
      </div>

      {!surveyData?.survey?.completed || !surveyData?.teacher?.completed || !surveyData?.student?.completed ? (
        <ModalTrigger
          onClick={onClick}
          img={finishImage}
          title={'¿Deseas terminar la encuesta?'}
          buttonText={'Finalizar encuesta'}
        />
      ) : (
        <ModalTrigger
          onClick={() => navigate('/public/results')}
          img={report}
          text1={'Informe de resultados'}
          text2={'¡Ya disponible!'}
          buttonText={'Ver reporte'}
          colorButton={'color-result'}
          colorIcon={'color-icon-button'}
        />
      )}
    </div>
  )
}

ProfessorInfo.displayName = 'ProfessorInfo';

export default ProfessorInfo;
