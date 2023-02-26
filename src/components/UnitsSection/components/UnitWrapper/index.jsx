import PropTypes from 'prop-types';
import './UnitWrapper.css';

const UnitWrapper = ({ children, customClass }) => {
  const cls = ['box-container', customClass].join(' ');

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

UnitWrapper.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired
};

UnitWrapper.defaultProps = {
  customClass: ''
};

export default UnitWrapper;
