import { useState, useEffect } from 'react';
import config from 'src/config';
import './professor-profile.css';
import './DisguisedInput.js';
import DisguisedInput from './DisguisedInput.js';
import MenuDocenteIcon from 'src/assets/Icons/menu-docente.svg';
import profile from 'src/assets/Icons/profile-image.svg';
import finishImage from 'src/assets/images/finish-survey.png';
import report from 'src/assets/images/report-container.png';
import right from 'src/assets/Icons/thin-right.svg';
import ModalTrigger from './ModalTrigger';
import cookie from 'src/utils/cookie';

const dataCookies = cookie.getCookie('token');
const currentUser = dataCookies !== undefined && JSON.parse(dataCookies);

const ProfessorInfo = ({ onClick }) => {
  const [userData, setUserData] = useState({});

  console.log('userData',userData);

  useEffect(() => {
    fetch(`${config.baseURL}/establishments/info/455fd91d-15ac-48b6-8b2a-e75d7891bbab`, {
      headers: {
        token: JSON.parse(localStorage.getItem('user')).token
      }
    })
    .then(d => d.json())
    .then(data => setUserData(data.info))
  }, [])

  const data = [
    {
      label: "Email",
      value: currentUser.email
    },{
      label: "Institución",
      value: userData.establishment
    },{
      label: "Curso",
      value: userData.grade
    }
  ];

  const inputs = data.map(input => <DisguisedInput key={input.label} label={input.label} value={input.value} />);

  return (
    <div className="professor-info-container">
        <div className='professor-info-title'>
          <img className='professor-profile-img' src={profile} />
          <p>Perfil</p>
        </div>
        <div className="professor-info-data">
          <div className="professor-info-data-cont">
            <img src={MenuDocenteIcon} />
            <p className="professor-info-name">{ currentUser.name }</p>
            <p className="professor-info-type">Docente</p>
          </div>
          <div className="disguised-inputs-cont">
            { inputs }
          </div>
        </div>
        <ModalTrigger
          onClick={onClick}
          img={finishImage}
          title={'¿Deseas terminar la encuesta?'}
          buttonText={'Finalizar encuesta'}
        />
        <ModalTrigger
          img={report}
          title={'Informe de resultados ¡Ya disponible!'}
          buttonText={'Ver reporte'}
        />
    </div>
  )
}

export default ProfessorInfo;
