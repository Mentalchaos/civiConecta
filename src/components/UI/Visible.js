import PropTypes from 'prop-types';

const Visible = ({ children, condition }) => {
  if (!condition) {
    return null;
  }

  return typeof children === 'function' ? children() : children;
};

Visible.propTypes = {
  children: PropTypes.any.isRequired
};

export default Visible;
