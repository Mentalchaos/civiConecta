import { useNavigate } from 'react-router-dom';
import './buttonOptions.css';

const ButtonOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="options">
      <div className='options-buttons'>
        <a className='options-button options-button-left' onClick={() => navigate('/public/situations-dashboard')}>Situaciones emergentes</a>
        <a className='options-button options-button-right' onClick={() => navigate('/public/ephemeries-dashboard')}>Efemérides</a>
      </div>
    </div>
  )
}

export default ButtonOptions;
