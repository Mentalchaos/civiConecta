import './professor-profile.css';
import './DisguisedInput.js';
import DisguisedInput from './DisguisedInput.js';
import MenuDocenteIcon from 'src/assets/Icons/menu-docente.svg';
import profile from 'src/assets/Icons/profile-image.svg';

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

const ProfessorInfo = () => {
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
    </div>
  )
}

export default ProfessorInfo;
