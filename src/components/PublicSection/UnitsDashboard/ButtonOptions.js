import { useNavigate } from 'react-router-dom';
import './buttonOptions.css';

const ButtonOptions = () => {
  const navigate = useNavigate();
  const gradeId = sessionStorage.getItem('gradeId');

  return (
    <div className="options">
      <div className='options-buttons'>
        <a className='options-button options-button-left' onClick={() => navigate(`/public/situations-dashboard/${gradeId}`)}>Situaciones emergentes</a>
          <a className='options-button options-button-right' onClick={() => navigate(`/public/ephemeris-dashboard/${gradeId}`)}>Efemérides</a>
      </div>
    </div>
  )
}

export default ButtonOptions;
