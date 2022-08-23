import './loginForm.css'
import Input from "../UI/Input";
import Button from '../UI/Button'
import LoginFields from './LoginFields'

const LoginForm = () => {

    return(
        <div className="login-container">
            <form className="login-form" action="" method="POST">

                {/* <div className='form-group'>
                    <label className="form-label" htmlFor="username">Usuario</label>
                    <input className="form-input" id="username" type="text" placeholder='nombre de usuario' spellcheck="false"/>
                </div>

                <div className='form-group'>
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input className="form-input" id="password" type="password" placeholder='escriba su contraseña' />
                </div>

                <div className='form-group'>
                    <input className='form-input-submit' type="submit" value='Ingresar'/>
                </div> */}
                
                <LoginFields/>
                <Button/>

                <div className='help-section'>
                    <Input labelText={'Recuerdame'} type={'Checkbox'}/>
                    <a href="#'">Click aquí</a>
                </div>

            </form>
        </div>
    )

}

export default LoginForm;