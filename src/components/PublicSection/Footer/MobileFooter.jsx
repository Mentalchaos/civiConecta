import logo from 'src/assets/Icons/logo-white.svg';
import whatsapp from 'src/assets/Icons/whatsapp-icon.svg';
import instagram from 'src/assets/Icons/instagram-icon.svg';
import facebook from 'src/assets/Icons/facebook-icon.svg';
import linkedin from 'src/assets/Icons/linkedin-icon.svg';
import './PublicFooter.css';

const MobileFooter = () => {
  return (
    <div className='mobile-footer-container'>
      <div className='footer-logo-container'>
        <img className='footer-logo' src={logo} />
      </div>

      <div className='social-container'>
        <a className="footer-links" href='https://api.whatsapp.com/send/?phone=56931282897&text=CiviConecta&type=phone_number&app_absent=0' target="_blank">
          <img className='social-icon' src={whatsapp} />
        </a>
        <a className="footer-links" href='https://www.instagram.com/civiconecta/' target="_blank">
          <img className='social-icon' src={instagram} />
        </a>
        <a className="footer-links" href='https://m.facebook.com/CiviConecta?_rdr' target="_blank">
          <img className='social-icon' src={facebook} />
        </a>
        <a className="footer-links" href='https://civiconecta.cl/' target="_blank">
          <img className='social-icon' src={linkedin} />
        </a>
      </div>

      <div className='container-three'>
        <div className='links-container'>
          <a className="footer-links" href='https://civiconecta.cl/#sobre-civi' target="_blank">Sobre CiviConecta</a>
          <a className="footer-links" href='https://civiconecta.cl/#Profesionales' target="_blank">Profesionales</a>
          <a className="footer-links" href='https://civiconecta.cl/' target="_blank">Testimonios</a>
          <a className="footer-links" href='https://civiconecta.cl/#Contacto' target="_blank">Contacto</a>
        </div>
      </div>
      <div className='last-footer-container'>
        <p>® 2023, CiviConecta SpA.</p>
        <p>Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default MobileFooter;