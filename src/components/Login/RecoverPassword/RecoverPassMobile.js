import ImageSection from "src/components/PublicSection/Login/ImageSection/ImageSection";

import './RecoverPassword.css';


const RecoverPassMobile = () => {
  return (
    <div className="recover-mobile">
      <ImageSection />
      <div className="recover-mobile-title">
        <p>Contraseña Olvidada</p>
      </div>
      <div className="recover-mobile-description">
        <p>
          Para ayudarte ingresa la cuenta registrada en nuestra plataforma. Esta corresponde al correo de uso
          institucional que tu empleador(a) informó.
        </p>
      </div>
    </div>
  )
}


export default RecoverPassMobile;