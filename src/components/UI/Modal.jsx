import React from 'react';
import PropTypes from 'prop-types';
import './uiStyles.css';

const Modal = ({ children, title, subtitle, customClass, ...props }) => {
  const cls = ['modal-content', customClass].join(' ');

  return (
    <div className="modal-container">
      <section className={cls} {...props}>
        <h1 className="modal__title">{title}</h1>
        <span className="modal__subtitle">{subtitle}</span>
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired
};

Modal.defaultProps = {
  customClass: '',
  title: '',
  subtitle: ''
};

export default Modal;
