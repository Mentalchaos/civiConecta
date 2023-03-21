import React, { useState } from 'react';
import Button from 'src/components/UI/Button';

const RecoverPasswordSection = () => {

    const styleButton = {
        width: ' 100%',
        fontSize: ' 15px',
        font: ' inherit',
        marginTop: ' 80px',
        color: ' white',
        padding: ' 20px 20px',
        backgroundColor: ' var(--color-secondary)',
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
    <div className='recover-section'>
        <form className='recover-form'>
            <div className="form-group">
            <label className="form-label" htmlFor="username">
                Email de usuario
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
            </div>
            <div className="form-group">
            <Button
                onClick={() => btnAlert()}
                customStyles={emailInput.length === 0 ? greyButton : styleButton }
                disabled={emailInput.length === 0 ? true : false}
                type="submit"
                text={"Enviar"}
            />
            </div>
            <div className='recover-container'>
                <a className='return-recover' >Volver al inicio</a>
            </div>
        </form>
    </div>
  );
};

export default RecoverPasswordSection;
