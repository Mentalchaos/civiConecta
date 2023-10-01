import PropTypes from 'prop-types';

const Visible = ({ children, condition, when }) => {
  const conditions = when ?? condition;

  if (!conditions) {
    return null;
  }

  return typeof children === 'function' ? children() : children;
};

Visible.propTypes = {
  when: PropTypes.any,
  condition: PropTypes.any,
  children: PropTypes.any.isRequired
};

export default Visible;
