import './loginForm.css'

const LoginForm = () => {

    return(
        <div className="login-container">
            <form className="login-form" action="" method="POST">

                <div className='form-group'>
                    <label className="form-label" htmlFor="username">Usuario</label>
                    <input className="form-input" id="username" type="text" placeholder='nombre de usuario' />
                </div>

                <div className='form-group'>
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input className="form-input" id="password" type="password" placeholder='escriba su contraseña' />
                </div>

                <div className='form-group'>
                    <input className='form-input-submit' type="submit" value='Ingresar'/>
                </div>

            </form>
        </div>
    )

}

export default LoginForm