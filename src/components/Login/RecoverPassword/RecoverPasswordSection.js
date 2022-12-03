import React from 'react';
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
                id="email"
                name="email"
                type="text"
                placeholder="Escriba su correo aquí"
                spellCheck="false"
            />
            </div>
            <div className="form-group">
            <Button
                customStyles={styleButton}
                type="submit"
                text={"Enviar"}
            />
            </div>
            <div className='recover-container'>
                <a className='return-recover' href='/auth/login'>Volver al inicio</a>
            </div>
        </form>
    </div>
  );
};

export default RecoverPasswordSection;