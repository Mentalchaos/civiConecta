import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/UI/Button';
import ImageSection from "src/components/PublicSection/Login/ImageSection/ImageSection";
import back from 'src/assets/Icons/back-arrow.svg';

import './RecoverPassword.css';


const RecoverPassMobile = () => {
  const navigate = useNavigate();

  const styleButton = {
    width: ' 100%',
    fontSize: ' 15px',
    font: ' inherit',
    color: ' white',
    padding: ' 20px 20px',
    backgroundColor: ' var(--color-primary)',
    cursor: ' pointer',
    outline: ' none',
    border: ' none',
  };

  const greyButton = {
    ...styleButton,
    backgroundColor: 'var(--gray-dark)'
  }

  const [emailInput, setEmailInput] = useState('');
  const btnAlert = () => alert('El correo se ha enviado con exito')

  return (
    <div className="recover-mobile">
      <ImageSection />
      <div className='recover-mobile-title'>
        <p>Contraseña Olvidada</p>
      </div>
      <div className='recover-mobile-p'>
        <p>
          Para ayudarte ingresa la cuenta registrada en nuestra plataforma. Esta corresponde al correo de uso
          institucional que tu empleador(a) informó.
        </p>
      </div>
      <form className='recover-mobile-form'>
        <label className="form-label" htmlFor="username">
          Correo electrónico
        </label>
        <input
          className="form-input input-name"
          /* onChange={handleInputChange} */
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          id="email"
          name="email"
          type="text"
          placeholder="Escriba su correo aquí"
          spellCheck="false"
        />
      </form>
      <div className="recover-mobile-button">
        <Button
          onClick={() => btnAlert()}
          customStyles={emailInput.length === 0 ? greyButton : styleButton}
          disabled={emailInput.length === 0 ? true : false}
          type="submit"
          text={"Enviar"}
        />
      </div>
      <div className='recover-back-button'>
        <img src={back} alt='go-back'/>
        <p onClick={() => navigate('/auth/login')} >Volver</p>
      </div>
      <div className='rights-reserved'>
        <p>® 2023, CiviConecta SpA. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}


export default RecoverPassMobile;