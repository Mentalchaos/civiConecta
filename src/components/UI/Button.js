// Crearemos muchos botones en la App, usaremos este componente para todos
// Recibira un onClick
// Carpeta UI guardara todos los componentes que sean genericos, los que estaran por todos lados de la pagina

import PropTypes from 'prop-types';
import './uiStyles.css';

const Button = ({ text, icon, customStyles, onClick, ...props }) => {
  return (
    <div className="button-container" {...props}>
      <button onClick={onClick} style={customStyles} className="button">
        {icon && <img src={icon} alt="icon" />}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Boton sin texto :(',
  customStyles: '',
  onClick: () => null,
};

Button.displayName = 'Button';

export default Button;
