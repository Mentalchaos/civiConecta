import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'src/services/admin/user.request';
import useForm from 'src/hooks/useForm';
import './loginForm.css';

const LoginForm = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleInputChange } = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) return;

    signIn(email, password).then(resp => {
      try {
        const { email, name, role, active, token } = resp.user;
        const saveData = {
          name,
          email,
          role,
          active,
          token,
        };
        localStorage.setItem('user', JSON.stringify(saveData));
        setErrorMessage('');
        setShowErrorMessage(false);
        navigate('/admin/dashboard');
      } catch (err) {
        console.error(err);
        setErrorMessage(resp.error);
        setShowErrorMessage(true);
      }
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
          <input
            onClick={handleSubmit}
            className="form-input-submit"
            type="submit"
            value="Ingresar"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
