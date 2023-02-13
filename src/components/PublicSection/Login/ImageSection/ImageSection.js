import { useEffect } from 'react';
import loginImage from 'src/assets/images/slider/slide-1.png';
import img2 from 'src/assets/images/slider/slide-2.png';
import img3 from 'src/assets/images/slider/slide-3.png';
import img4 from 'src/assets/images/slider/slide-4.png';
import './imageSection.css';

const $ = x => document.querySelector(x);


const ImageSection = () => {
  useEffect(() => {
    let timer;
    const images = ['img1', 'img2', 'img3', 'img4'];

    const createImages = () => {
      const imagesContainer = $('#images');
      const image1 = document.createElement('img');
      const image2 = document.createElement('img');
      const image3 = document.createElement('img');
      const image4 = document.createElement('img');

      image1.id = 'img1';
      image1.classList.add('image');
      image1.classList.add('active');
      image1.src = loginImage;
      image1.alt = 'Imagen formulario';
      imagesContainer.appendChild(image1);

      image2.id = 'img2';
      image2.classList.add('image');
      image2.src = img2;
      image2.alt = 'Imagen formulario';
      imagesContainer.appendChild(image2);

      image3.id = 'img3';
      image3.classList.add('image');
      image3.src = img3;
      image3.alt = 'Imagen formulario';
      imagesContainer.appendChild(image3);

      image4.id = 'img4';
      image4.classList.add('image');
      image4.src = img4;
      image4.alt = 'Imagen formulario';
      imagesContainer.appendChild(image4);
    };

    const slideImages = () => {
      const currentImage = images.shift();
      const nextImage = images[0];
      $(`#${currentImage}`).classList.remove('active');
      $(`#${nextImage}`).classList.add('active');
      images.push(currentImage);
      timer = setTimeout(slideImages, 3000);
    };

    createImages();
    timer = setTimeout(slideImages, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="images" className="img-section"></div>
  );
};

export default ImageSection;
