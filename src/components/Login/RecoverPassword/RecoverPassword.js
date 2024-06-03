import React from 'react';
import RecoverPasswordSection from './RecoverPasswordSection';
import RecoverPassMobile from './RecoverPassMobile';
import logo from 'src/assets/images/logo-civiconecta.png';

import './RecoverPassword.css';
import ImageSection from 'src/components/PublicSection/Login/ImageSection/ImageSection';

const RecoverPassword = () => {
  return (
    <div>
      <div className='recover-mobile-section'>
        <RecoverPassMobile />
      </div>
      <div className='recover-desk-section'>
        <ImageSection />
        <div className='recover-form-section'>
          <div className='recover-logo-section'>
            <a className='recover-form-logo' href="https://civiconecta.cl">
              <img style={{width: '35%'}} src={logo} alt='logo'/>
            </a>
          </div>
          <div className='recover-text-section'>
            <p>¿Contraseña olvidada?</p>
            <p>Para ayudarte ingresa la cuenta registrada en nuestra plataforma.
            Esta corresponde al correo de uso institucional que tu empleador(a)
            informó.
            </p>
          </div>
          <div style={{width: '70%'}}>
            <RecoverPasswordSection/>
          </div>
        </div>
      </div>
      <div className='rights-reserved'>
        <p>® 2023, CiviConecta SpA. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default RecoverPassword;