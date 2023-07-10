import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../../../assets/images/logo-civiconecta.png'

import './loginSection.css';

const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-section-header">
        <img className='logo-civi' src={logo} alt='logo'></img>
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
