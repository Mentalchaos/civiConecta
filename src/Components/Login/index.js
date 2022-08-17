/* Cada component que se llama index es el padre principal */

import LoginPage from "./Login";

const Login = () => {
  return (
    <div>
      {/* Contenedor de todo lo que tenga que ver con login,
      aqui deberiamos llamar a las demas secciones o componentes hijos */}
      {/* Login */}
      <LoginPage/>
    </div>
  )
}

export default Login;