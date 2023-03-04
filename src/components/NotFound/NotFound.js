import React from 'react';
import { useNavigate } from 'react-router-dom';
import civiLogo from 'src/assets/images/civi_logo.png';
import Button from '../UI/Button';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const buttonStyles = {
    color: '#f2f2f2',
    backgroundColor: 'var(--color-primary)',
    marginTop: '30px',
    padding: '10px 30px',
    borderRadius: 10,
    fontSize: '15px',
  };
  return (
    <div className="not-found_container">
      <div className="not-found_text-container">
        <h1 className="text_title">Ooops...</h1>
        <p className="text_title2">
          No pudimos encontrar lo
          <br /> que estás buscando.
        </p>
        <Button
          onClick={() => navigate('/')}
          customStyles={buttonStyles}
          text={'< Volver al inicio'}
        />
      </div>
      <div className="not-found_image-container">
        <img src={civiLogo} alt="civiconecta not found" />
      </div>
    </div>
  );
};
export default NotFound;
