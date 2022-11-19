import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

import './loginSection.css';

const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-section-header">
        <p className="login-section-title">LOG IN</p>
        <p className="login-section-subtitle">
          Admin <strong className="civi-text">CIVI Conecta</strong>.
        </p>
      </div>
      <LoginForm />
      <div className="login-section-footer">
        <div>
          Problemas al ingresar al sitio?{' '}
          <Link className="link-recover" to="../recover-password">
            Click aqu&iacute;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
