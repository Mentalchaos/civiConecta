import './imageSection.css';
import loginImage from '../../../assets/images/login-image.png';

const ImageSection = () => {
  return (
    <div className="img-section">
      <img
        className="img-section-image"
        src={loginImage}
        alt="Imagen formulario"
      />
    </div>
  );
};

export default ImageSection;
