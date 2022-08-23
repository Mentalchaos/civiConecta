import LoginForm from './LoginForm'
import './loginSection.css'

const LoginSection = () => {

    return(
        <div className='login-section'>
            <div className='login-section-header'>
                <p className='login-section-title'>LOG IN</p>
                <p className='login-section-subtitle'>Bienvenido a la intranet <strong>CIVI Conecta</strong></p>
            </div>

            <LoginForm />

            <div className='login-section-footer'>
                <div className='login-section-footer-info'>loren loren loren loren loren loren loren loren</div>
            </div>
        </div>
    )

}

export default LoginSection