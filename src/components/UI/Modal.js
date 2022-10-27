import React from 'react';
import './uiStyles.css';

const Modal = ({ children, title, subtitle }) => {
  return (
    <div className="modal-container">
      <section className="modal-content">
        <h1 className="modal__title">{title}</h1>
        <span className="modal__subtitle">{subtitle}</span>
        {children}
      </section>
    </div>
  );
};

export default Modal;
