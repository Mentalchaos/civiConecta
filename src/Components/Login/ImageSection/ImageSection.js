import "./imageSection.css";

const ImageSection = ({ img }) => {
  return (
    <div className="img-section">
      <img className="img-section-image" src={img} alt="Imagen formulario" />
    </div>
  );
};

export default ImageSection;
