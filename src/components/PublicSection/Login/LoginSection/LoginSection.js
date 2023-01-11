import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../../../assets/images/civi_logo.png'

import './loginSection.css';

const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-section-header">
        <div className='login-header-logo'>
          <div className='c'>C</div>
          <div className='i'>I</div>
          <div className='v'>V</div>
          <div className='i2'>I</div>
          <div className='login-header-img-container'>
            <img className='login-header-img' src={logo} alt='logo'></img>
          </div>
        </div>
        <div className='login-header-logo2'>
          <div className='logo-subtitle'>Conecta</div>
        </div>
      </div>
      <LoginForm />
      <div className="login-section-footer">
        <div>
          <input type='checkbox'></input>
          <Link className="link-recover" to="../recover-password">
            ¿Contraseña olvidada?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
