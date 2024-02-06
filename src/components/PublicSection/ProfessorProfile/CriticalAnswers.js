import { useState, useEffect, useRef } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import Answer from './Answer';
import criticalIcon from 'src/assets/Icons/critical-icon.svg';
import criticalIconMobile from 'src/assets/Icons/critical-icon-mobile.svg';
import Visible from 'src/components/UI/Visible';

const CriticalAnswers = ({ onClick, setDataPieChart, setSelectedAnswer }) => {

  const [criticalData, setCriticalData] = useState([]);
  const [isMobileView, setIsMobileView] = useState(window.screen.width < 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef(null);

  const goToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft = slideWidth * index;
    }
    setCurrentIndex(index);
  };

  const updateScreenSize = () => {
    setIsMobileView(window.screen.width < 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getCriticalAnswers = async () => {
    const userData = getUserData();
    const baseURL = `${config.baseURL}/reports/student-answers/${userData.uuid}/critical-answers`;

    const response = await fetch(baseURL, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    const data = await response.json();
    setCriticalData(data.results);
  };
  useEffect(() => {
    getCriticalAnswers();
  }, []);

  return (

    <Visible condition={criticalData.length}>
      <div className='critical-answers-container'>
        <div className='critical-answers-title'>
          {
            (isMobileView ? 
            <img src={criticalIconMobile} alt='img' />
            :
            <img src={criticalIcon} alt='img' />)
          }
          <p>Respuestas críticas</p>
        </div>
        <div className='critical-answers-units'>
          {
            isMobileView ?
              (criticalData[currentIndex] && (
                <Answer
                  key={criticalData[currentIndex].questionId}
                  id={criticalData[currentIndex].questionId}
                  answer={criticalData[currentIndex].description}
                  onClick={onClick}
                  setDataPieChart={setDataPieChart}
                  setSelectedAnswer={setSelectedAnswer}
                />
              )) :
              (criticalData && criticalData.map((data) =>
                <Answer
                  key={data.questionId}
                  id={data.questionId}
                  answer={data.description}
                  onClick={onClick}
                  setDataPieChart={setDataPieChart}
                  setSelectedAnswer={setSelectedAnswer}
                />
              ))
          }
        </div>
        {
          isMobileView &&
          <div className="carousel-indicators">
            {criticalData.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        }
      </div>
    </Visible>
  )
}

export default CriticalAnswers;