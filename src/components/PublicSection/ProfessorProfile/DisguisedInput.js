const DisguisedInput = ({ label, value, letter }) => {
  return (
    <div className="disguised-input-container">
      <p className="disguised-label">{label}</p>
      <p className="disguised-value">{value} {letter}</p>
    </div>
  )
}

DisguisedInput.defaultProps = {
  label: '',
  value: ''
}

export default DisguisedInput;
