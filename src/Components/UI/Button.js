// Crearemos muchos botones en la App, usaremos este componente para todos
// Recibira un onClick
// Carpeta UI guardara todos los componentes que sean genericos, los que estaran por todos lados de la pagina

import PropTypes from 'prop-types';
//import './uiStyles' tira error

const Button = ({ text, customStyles, onClick }) => {
  const hasStyles = customStyles ? customStyles : null;
  return (
    <div className="button-container">
      <button className="button" style={hasStyles}>{ text }</button>
    </div>
  )
}

//ANTES
//<div className="button-container">
//  <button className="button" style={hasStyles}>{ text }</button>
//</div>

//<div className='form-group'>
//    <input className='form-input-submit' type="submit" value='Ingresar'/>
//</div>


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