import { useEffect, useState, useContext } from 'react';
import arrowBack from 'src/assets/Icons/back.svg';
import Surveys from '../Surveys/Surveys';
import Footer from 'src/components/PublicSection/Footer/index';
import FirstStep from '../FirstStep/FirstStep';
import '../index.css';
import MobileFooter from '../../Footer/MobileFooter';

const ProfessorSurvey = () => {
  const [isStartSurvey, setIsStartSurvey] = useState(false);

  useEffect(() => {
    setIsStartSurvey(false);
  }, []);

  return (
    <>
      <main className="survey-content-container">
        <div className="content-start__back-link">
          <img src={arrowBack} alt="Arrow" />
          <a onClick={() => window.history.back()}>Volver</a>
        </div>
        {!isStartSurvey && <FirstStep type={'teacher'} setIsStartSurvey={setIsStartSurvey} />}

        {isStartSurvey && <Surveys userType={'teacher'} />}
      </main>

      <div className='mobile-footer'>
        <MobileFooter />
      </div>

      <div className='professor-survey-footer' style={{ padding: '0 2.4em' }}>
        <Footer />
      </div>
    </>
  );
};

export default ProfessorSurvey;
