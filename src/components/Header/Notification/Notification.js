import React from 'react';
import './Notification.css';
import alertNotification from 'src/assets/images/alert-notification.svg';

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification__text">
        <p>
          Proceda a generar las encuestas, acceda a “Encuesta docente” y
          “Encuesta al alumno” para que se generen las unidades.
        </p>
      </div>
      <div className="notification__icon">
        <img src={alertNotification} alt="icon" />
      </div>
    </div>
  );
};

export default Notification;
