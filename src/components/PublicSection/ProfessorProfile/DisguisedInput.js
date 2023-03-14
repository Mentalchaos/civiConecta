const DisguisedInput = ({ label, value }) => {
  return (
    <div className="disguised-input-container">
      <p className="disguised-label">{ label }</p>
      <p className="disguised-value">{ value }</p>
    </div>
  )
}

DisguisedInput.defaultProps = {
  label: '',
  value: ''
}

export default DisguisedInput;
