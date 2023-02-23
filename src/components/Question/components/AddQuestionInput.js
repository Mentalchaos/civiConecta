import PropTypes from 'prop-types';

const AddQuestionInput = ({ description, changeDescription, label }) => {
  return (
    <input
      className="option"
      onChange={e => changeDescription(label, e.target.value)}
      value={description}
      placeholder="Añada una opción."
    />
  );
};

AddQuestionInput.propTypes = {
  label: PropTypes.string.isRequired,
  changeDescription: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
};

export default AddQuestionInput;
