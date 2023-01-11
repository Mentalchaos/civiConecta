import './imageSection.css';
import loginImage from '../../../../assets/images/clases-presenciales.jpeg';
import img2 from '../../../../assets/images/teacher.jpg'
import img3 from '../../../../assets/images/statistics.jpg'
import img4 from '../../../../assets/images/emergent.jpg'

const ImageSection = () => {

  /* document.getElementsByClassName('img-section-image'); */

  /* document.getElementById('img1').className = " clase"; */

  /* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  } */

  /* for (let i = 0; i < 3; i++) {
    text += cars[i] + "<br>";
  } */

  /* setInterval(() => {

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        console.log(`ciclo ${i}`);
        document.getElementById('img1').className += " clase";

      },5000)
    }
      console.log('termino ciclo');
    },3000); */

    /* (() => {

      while (true) {
  
        setTimeout(() => {
  
        },3000)
  
      }
      
    })(); */

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

    const c = document.getElementById(`img${b}`);

    document.getElementById(`img${b}`).classList.add("active");
    console.log(document.getElementsByClassName(`img${b}`));
    document.getElementById(`img${b-1}`).classList.remove("active");

  },4000);

  return (
    <div className="img-section">
      <img
        className="image active"
        src={loginImage}
        alt="Imagen formulario"
        id='img1'
      />
      <img
        className="image2"
        src={img2}
        alt="Imagen formulario"
        id='img2'
      />
      <img
        className="image3"
        src={img3}
        alt="Imagen formulario"
        id='img3'
      />
      <img
        className="image4"
        src={img4}
        alt="Imagen formulario"
        id='img4'
      />
    </div>
  );

};

export default ImageSection;
