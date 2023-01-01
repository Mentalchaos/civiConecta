import logo from 'src/assets/Icons/logo-white.svg';
import whatsapp from 'src/assets/Icons/whatsapp-icon.svg';
import instagram from 'src/assets/Icons/instagram-icon.svg';
import facebook from 'src/assets/Icons/facebook-icon.svg';
import linkedin from 'src/assets/Icons/linkedin-icon.svg';

import './PublicFooter.css';

const PublicFooter = () => {
    return (
        <div className='container-two'>
            <div className='footer-container'>
                <div className='footer-logo-container'>
                    <img className='footer-logo' src={logo} />
                </div>
                <div className='container-three'>
                    <div className='links-container'>
                        <a>Sobre CiviConecta</a>
                        <a>Profesionales</a>
                        <a>Testimonios</a>
                        <a>Contacto</a>
                    </div>
                    <div className='last-footer-container'>
                        <p>Santiago, Chile.</p>
                        <p>® 2022, CiviConecta SpA. Todos los derechos reservados</p>
                    </div>
                </div>
                <div className='social-container'>
                    <a>
                        <img className='social-icon' src={whatsapp} />
                    </a>
                    <a>
                        <img className='social-icon' src={instagram} />
                    </a>
                    <a>
                        <img className='social-icon' src={facebook} />
                    </a>
                    <a>
                        <img className='social-icon' src={linkedin} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PublicFooter;