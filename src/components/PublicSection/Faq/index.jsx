import React, { useState, useEffect } from 'react';
import back from 'src/assets/Icons/back-arrow.svg';
import brain from 'src/assets/Icons/purple-heart-brain.svg';
import email from 'src/assets/Icons/email-icon.svg';
import telephone from 'src/assets/Icons/telephone-icon.svg';
import girlDesktop from 'src/assets/images/faq-desktop-image.png';
import icon from 'src/assets/Icons/faq-icon.svg';
import footerDesktop from 'src/assets/images/faq-footer-img.png';
import './Faq.css';
import FaqSearchBar from './FaqSearchBar';
import Footer from '../Footer';
import QuestionsSection from './QuestionsSection';
import FaqMobile from './FaqMobile';
import faqQuestions from './faqQuestions';

const Faq = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const dataHasCoincidence = () => {
      if (inputValue.length === 0) {
        setFilteredQuestions([]);
        return;
      }
      const lowerCaseText = inputValue.toLowerCase();

      const mappedData = faqQuestions.map(category =>
        category.filter(item =>
          item.pregunta.toLowerCase().includes(lowerCaseText)
        )
      ).filter(category => category.length > 0);

      setFilteredQuestions(mappedData.flat());
    };

    dataHasCoincidence();
  }, [inputValue]);

  return (
    <div>
      <div className='faq-mobile-section'>
        <FaqMobile />
      </div>
      <div className='faq-section'>
        <div className='faq-back-button'>
          <button className='profile-back-container' onClick={() => window.history.back()}>
            <img src={back} alt='go-back' />
            Volver
          </button>
        </div>
        <div className='faq-description-container'>
          <div className='faq-description-image'>
            <img src={girlDesktop} />
          </div>
          <div className='faq-description-text'>
            <div className='faq-container-title'>
              <img src={icon} style={{ width: '20px' }} />
              <p className='faq-title'>Preguntas frecuentes</p>
            </div>
            <div>
              <p className='faq-text'>
                En esta sección encontrarás respuestas a las consultas más comunes sobre nuestras clases y sobre la funcionalidad de nuestra aplicación web.
                Si no encuentras lo que buscas, contáctanos. ¡Gracias por formar parte de la CiviComunidad!
              </p>
            </div>
          </div>
        </div>
        <div className='faq-search-bar'>
          <FaqSearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div>
          { filteredQuestions.length > 0 ? <QuestionsSection inputValue={inputValue} faqQuestions={filteredQuestions} filter={true} /> : <QuestionsSection inputValue={inputValue} faqQuestions={faqQuestions} /> }
        </div>
        <div className='faq-footer-container'>
          <div className='faq-footer-image'>
            <img src={footerDesktop} />
          </div>
          <div className='faq-footer-text'>
            <div className='faq-footer-title-cont'>
              <img src={brain} />
              <p className='faq-footer-title'>¿No resolviste todas tus consultas?</p>
            </div>
            <div>
              <p className='faq-text' style={{ marginTop: '2em' }}>
                Puedes comunicarte directamente con la persona encargada de tu establecimiento o escribirnos un correo a la dirección contacto@civiconecta.cl.
                Nuestro horario de atención es de lunes a viernes, de 07:30 a 17:00 horas.
              </p>
            </div>
            <div className='faq-contact-container'>
              <div className='faq-email-container'>
                <img src={email} />
                <p>Contacto@civiconecta.cl</p>
              </div>
              <div className='faq-telephone-container'>
                <img src={telephone} />
                <p>+56 9 6226 1311</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

Faq.displayName = 'Faq';

export default Faq;
