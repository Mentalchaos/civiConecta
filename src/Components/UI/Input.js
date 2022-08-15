// Input recibe su label text
const Input = ({ labelText }) => {
  return (
    <div>
      <label for="input">{ labelText }</label>
      <input type="text" id="input" name={labelText} />
    </div>
  )
}

export default Input;