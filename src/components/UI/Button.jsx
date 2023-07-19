import PropTypes from 'prop-types';
import './uiStyles.css';

const Button = ({
  text,
  icon,
  customStyles,
  onClick,
  customClasses,
  children,
  type,
  disabled = false,
  ...props
}) => {
  const cls = ['button', customClasses].join(' ');
  const content = children || text;


  return (
    <div className="button-container">
      <button
        type={type}
        onClick={onClick}
        style={customStyles}
        className={cls}
        disabled={disabled}
        {...props}
      >
        {icon && <img src={icon} alt="icon" />}
        {content}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  customStyles: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  customClasses: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  text: 'Boton sin texto :(',
  children: null,
  customClasses: '',
  onClick: () => null,
  customStyles: {}
};

Button.displayName = 'Button';

export default Button;
