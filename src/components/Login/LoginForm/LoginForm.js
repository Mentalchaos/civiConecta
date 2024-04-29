import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'src/services/admin/user.request';
import { setUserData } from 'src/utils/user.js';
import Button from 'src/components/UI/Button';
import useForm from 'src/hooks/useForm';
import './loginForm.css';

const LoginForm = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleInputChange } = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const styleButton = {
    width: '100%',
    fontSize: '15px',
    font: 'inherit',
    color: 'white',
    padding: '20px 20px',
    backgroundColor: 'var(--color-secondary)',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) return;
    onSignIn(email, password);
  };

  const onSignIn = (email, pass) => {
    setIsLoading(true);
    signIn(email, pass).then(resp => {
      if (!resp.ok) {
        setErrorMessage(resp.error);
        setShowErrorMessage(true);
        setIsLoading(false);
        return;
      }

      const { email, name, role, active, token, uuid } = resp.user;
      console.log('resp',resp);
      const saveData = {
        name,
        email,
        role,
        active,
        token,
      };

      setUserData(saveData, uuid);
      setErrorMessage('');
      setShowErrorMessage(false);
      setIsLoading(false);
      navigate('/admin/dashboard');
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Email de usuario
          </label>
          <input
            className="form-input input-name"
            onChange={handleInputChange}
            id="email"
            name="email"
            type="text"
            placeholder="Escriba su correo aquí"
            spellCheck="false"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="form-input"
            onChange={handleInputChange}
            id="password"
            name="password"
            type="password"
            placeholder="Escriba su contraseña"
          />
        </div>

        {showErrorMessage && (
          <h3
            style={{
              color: 'red',
              fontWeight: 100,
              fontSize: 14,
              marginTop: 10,
            }}
          >
            {errorMessage}
          </h3>
        )}

        <div className="form-group">
          <Button
            customStyles={styleButton}
            onClick={handleSubmit}
            text={isLoading ? ' Cargando...' : ' Ingresar'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
