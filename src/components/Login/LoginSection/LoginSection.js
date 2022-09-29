import './loginSection.css';
import LoginForm from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-section-header">
        <p className="login-section-title">LOG IN</p>
        <p className="login-section-subtitle">
          Bienvenido a la intranet <strong>CIVI Conecta</strong>
        </p>
      </div>
      <LoginForm />
      <div className="login-section-footer">
        <div>
          Problemas al ingresar al sitio?{' '}
          <Link to="../recover-password">Click aqu&iacute;</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
