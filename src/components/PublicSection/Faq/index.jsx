import React, { useState } from 'react';
import back from 'src/assets/Icons/back-arrow.svg';
import brain from 'src/assets/Icons/purple-heart-brain.svg';
import email from 'src/assets/Icons/email-icon.svg';
import telephone from 'src/assets/Icons/telephone-icon.svg';
import girlDesktop from 'src/assets/images/faq-desktop-image.png';
import footerDesktop from 'src/assets/images/faq-footer-img.png';
import './Faq.css';
import FaqSearchBar from './FaqSearchBar';
import Footer from '../Footer';
import QuestionsSection from './QuestionsSection';

const Faq = () => { 

  const [inputValue, setInputValue] = useState('');

  return (
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
          <p className='faq-title'>Preguntas frecuentes</p>
          <div>
            <p className='faq-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                veniam, quis nost.
            </p>
          </div>
        </div>
      </div>
      <div className='faq-search-bar'>
        <FaqSearchBar
          inputValue={inputValue}
          onChange={setInputValue}
        />
      </div>
      <div>
        <QuestionsSection />
      </div>
      <div className='faq-footer-container'>
        <div className='faq-footer-image'>
          <img src={footerDesktop} />
        </div>
        <div className='faq-footer-text'>
          <div className='faq-footer-title-cont'>
            <img src={brain}/>
            <p className='faq-footer-title'>¿No resolviste todas tus consultas?</p>
          </div>
          <div>
            <p className='faq-text' style={{marginTop: '2em'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className='faq-contact-container'>
            <div className='faq-email-container'>
              <img src={email} />
              <p>Contacto@civiconecta.cl</p>
            </div>
            <div className='faq-telephone-container'>
              <img src={telephone}/>
              <p>+56 9 6226 1311</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

Faq.displayName = 'Faq';

export default Faq;