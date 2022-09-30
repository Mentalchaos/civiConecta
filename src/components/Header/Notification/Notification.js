import React from 'react';
import './Notification.css';
import alertDefault from 'src/assets/images/alert-default.svg';
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
        {/* state para cambiar alert default por alert variante2 */}
        <img src={alertNotification} alt="icon" />
      </div>
    </div>
  );
};

export default Notification;
