import back from 'src/assets/Icons/back-arrow.svg';
import icon from 'src/assets/Icons/faq-icon.svg';
import teacher from 'src/assets/images/faq-mobile-image.png'
import email from 'src/assets/Icons/email-icon.svg';
import telephone from 'src/assets/Icons/telephone-icon.svg';
import './Faq.css';
import QuestionsMobile from './QuestionsMobile';
import MobileFooter from '../Footer/MobileFooter';
import FaqSearchBar from './FaqSearchBar';

const FaqMobile = () => {
  return (
    <>
      <div className='faq-mobile-container'>
        <div className='faq-back-button'>
          <button className='profile-back-container' onClick={() => window.history.back()}>
            <img src={back} alt='go-back' />
            Volver
          </button>
        </div>
        <div style={{marginTop: '2em'}}>
          <div className='faq-mobile-banner'>
            <img src={teacher} />
          </div>
          <div className='faq-mobile-description'>
            <div className='faq-banner-title'>
              <img src={icon}/>
              <p>Preguntas frecuentes</p>
            </div>
            <p className='faq-banner-description'>
            Para ayudarte ingresa la cuenta registrada en nuestra
            plataforma. Esta corresponde al correo de uso
            institucional que tu empleador(a) informó.
            </p>
          </div>
        </div>
        <FaqSearchBar />
        <QuestionsMobile />
        <div className='faq-mobile-footer-container'>
          <div className='faq-mobile-footer'>
            <p>
            ¿No resolviste todas tus consultas?
            </p>
          </div>
          <div className='faq-mobile-footer-description'>
            <p>Puedes comunicarte directamente con la persona encargada de tu establecimiento o escribirnos un correo a la dirección contacto@civiconecta.cl. 
              Nuestro horario de atención es de lunes a viernes, de 07:30 a 17:00 horas.
            </p>
            <div className='faq-mobile-info-container'>
              <div className='faq-mobile-info'>
                <img src={email} />
                <p>Contacto@civiconecta.cl</p>
              </div>
              <div className='faq-mobile-info'>
                <img src={telephone} />
                <p>+56 9 6226 1311</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  )
}

export default FaqMobile;