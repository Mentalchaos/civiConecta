import { useNavigate } from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import './loginForm.css';

const LoginForm = () => {
  const { values, handleInputChange } = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onHandleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) return;
    if (email === 'admin' && password === 'admin') navigate('/admin/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Email de usuario
          </label>
          <input
            className="form-input"
            onChange={handleInputChange}
            id="email"
            name="email"
            type="text"
            placeholder="Escriba su correo aquí"
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

        <div className="form-group">
          <input
            onClick={onHandleSubmit}
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
