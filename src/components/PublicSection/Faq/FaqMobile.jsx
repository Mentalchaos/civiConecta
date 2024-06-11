import back from 'src/assets/Icons/back-arrow.svg';
import icon from 'src/assets/Icons/faq-icon.svg';
import teacher from 'src/assets/images/faq-mobile-image.png'
import './Faq.css';
import QuestionsMobile from './QuestionsMobile';

const FaqMobile = () => {
  return (
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
      <QuestionsMobile />
    </div>
  )
}

export default FaqMobile;