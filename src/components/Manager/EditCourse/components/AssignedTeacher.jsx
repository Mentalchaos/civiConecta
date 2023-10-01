import PropTypes from 'prop-types';

const AssignedTeacher = ({ teacher }) => {
  return (
    <p>{`${teacher.name} ${teacher.email}`}</p>
  );
};

AssignedTeacher.defaultProps = {
  teacher: {}
};

AssignedTeacher.propTypes = {
  teacher: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })
};

export default AssignedTeacher;
