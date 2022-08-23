// Input recibe su label text
const Input = ({ labelText, type }) => {
  return (
    <div>
      <label for="input">{ labelText }</label>
      <input type={type} id="input" name={labelText} />
    </div>
  )
}

//<div className='form-group'>
//    <label className="form-label" htmlFor="password">Contraseña</label>
//    <input className="form-input" id="password" type="password" placeholder='escriba su contraseña' />
//</div>

export default Input;