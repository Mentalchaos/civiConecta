import './professor-profile.css';
import './DisguisedInput.js';
import DisguisedInput from './DisguisedInput.js';
import MenuDocenteIcon from 'src/assets/Icons/menu-docente.svg';
import profile from 'src/assets/Icons/profile-image.svg';
import finishImage from 'src/assets/images/finish-survey.png';
import report from 'src/assets/images/report-container.png';
import right from 'src/assets/Icons/thin-right.svg';
import ModalTrigger from './ModalTrigger';

const data = [
  {
    label: "Email",
    value: "catalina.acevedo@gmail.com"
  },{
    label: "Institución",
    value: "Liceo Amanda Labarca"
  },{
    label: "Curso",
    value: "5ºA"
  }
];

const ProfessorInfo = ({ onClick }) => {
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
            <p className="professor-info-name">Catalina Acevedo Setz</p>
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
