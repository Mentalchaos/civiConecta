import './imageSection.css';
import loginImage from 'src/assets/images/clases-presenciales.jpeg';
import img2 from 'src/assets/images/teacher.jpg';
import img3 from 'src/assets/images/statistics.jpg';
import img4 from 'src/assets/images/emergent.jpg';
import { useEffect } from 'react';

const ImageSection = () => {
  let a = 1
  let b = 0

  setInterval(() => {

    a += 1;
    console.log(a);
    b = a;

    if (a === 4) {
      console.log('pasando')
      a = 0;
      setTimeout(() => {
        document.getElementById(`img${b}`).classList.remove("active");
      },3800)
    }

    //const c = document.getElementById(`img${b}`);

    document.getElementById(`img${b}`).classList.add("active");
    console.log(document.getElementsByClassName(`img${b}`));
    document.getElementById(`img${b-1}`).classList.remove("active");

  },2000);

  return (
    <div className="img-section">
      <img className="image active" src={loginImage} alt="Imagen formulario" id="img1" />
      <img className="image2" src={img2} alt="Imagen formulario" id="img2" />
      <img className="image3" src={img3} alt="Imagen formulario" id="img3" />
      <img className="image4" src={img4} alt="Imagen formulario" id="img4" />
    </div>
  );
};

export default ImageSection;
