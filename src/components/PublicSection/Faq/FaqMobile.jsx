import back from 'src/assets/Icons/back-arrow.svg';
import icon from 'src/assets/Icons/faq-icon.svg';
import teacher from 'src/assets/images/faq-mobile-image.png'
import email from 'src/assets/Icons/email-icon.svg';
import telephone from 'src/assets/Icons/telephone-icon.svg';
import './Faq.css';
import QuestionsMobile from './QuestionsMobile';
import MobileFooter from '../Footer/MobileFooter';
import FaqSearchBar from './FaqSearchBar';
import faqQuestions from './faqQuestions';

const FaqMobile = ({ filteredQuestions, setInputValue, inputValue,}) => {

  const faqsMobile = () =>
    filteredQuestions.length > 0 ?
    <QuestionsMobile inputValue={inputValue} faqQuestions={filteredQuestions} filter={true} />
     :
     <QuestionsMobile inputValue={inputValue} faqQuestions={faqQuestions} />;

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
            <img src={teacher} alt='info'/>
          </div>
          <div className='faq-mobile-description'>
            <div className='faq-banner-title'>
              <img src={icon} alt='info'/>
              <p>Preguntas frecuentes</p>
            </div>
            <p className='faq-banner-description'>
            Para ayudarte ingresa la cuenta registrada en nuestra
            plataforma. Esta corresponde al correo de uso
            institucional que tu empleador(a) informó.
            </p>
          </div>
        </div>
        <FaqSearchBar
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        {faqsMobile()}
        {/* faqs() */}
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
                <img src={email} alt='info'/>
                <p>Contacto@civiconecta.cl</p>
              </div>
              <div className='faq-mobile-info'>
                <img src={telephone} alt='info' />
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