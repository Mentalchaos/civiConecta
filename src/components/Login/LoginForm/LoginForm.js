import "./loginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form className="login-form" action="" method="POST">
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Email de usuario
          </label>
          <input
            className="form-input"
            id="username"
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
            id="password"
            type="password"
            placeholder="Escriba su contraseña"
          />
        </div>

        <div className="form-group">
          <input className="form-input-submit" type="submit" value="Ingresar" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
