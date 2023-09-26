import React from 'react';
import RecoverPasswordSection from './RecoverPasswordSection';
import RecoverPassMobile from './RecoverPassMobile';

import './RecoverPassword.css';

const RecoverPassword = () => {
  return (
    <div>
      <div className='recover-mobile-section'>
        <RecoverPassMobile />
      </div>
      <div>
        <div className='recover-section-header'>
          <div className="login-section-header">
            <p className="login-section-title">LOG IN</p>
            <p className="login-section-subtitle">Recuperación de contraseña</p>
          </div>
        </div>
        <RecoverPasswordSection/>
      </div>
    </div>
  );
};

export default RecoverPassword;
