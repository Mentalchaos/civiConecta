// Crearemos muchos botones en la App, usaremos este componente para todos
// Recibira un onClick

import PropTypes from 'prop-types';
import './uiStyles'

const Button = ({ text, customStyles, onClick }) => {
  return (
    <div className="button-container">
      <button className="button">{ text }</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
  onClick: PropTypes.object.isRequired
};

Button.defaultProps = {
  text: "Boton sin texto :(",
  customStyles: '',
  onClick: () => null
}

Button.displayName = 'Button';

export default Button;