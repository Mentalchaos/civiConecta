import Input from "../UI/Input";

const LoginFields = () => {
  return (
    <div>
      {/*Esto deberia servir como un contenedor que retorne 2 inputs, 1 para password, 1 para username*/}
      <Input labelText={'Usuario'} type={'text'}/>
      <Input labelText={'Contraseña'} type={'password'}/>
    </div>
  )
}

export default LoginFields;