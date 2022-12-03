import React from 'react';
import RecoverPasswordSection from './RecoverPasswordSection';

const RecoverPassword = () => {
  return (
    <div>
      <div className='recover-section-header'>
        <div className="login-section-header">
          <p className="login-section-title">LOG IN</p>
          <p className="login-section-subtitle">Recuperación de contraseña</p>
        </div>
      </div>
      <RecoverPasswordSection/>
    </div>
  );
};

export default RecoverPassword;
