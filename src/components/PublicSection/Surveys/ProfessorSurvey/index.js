import { useEffect, useState } from 'react';
import arrowBack from 'src/assets/Icons/back.svg';
import Surveys from '../Surveys/Surveys';
import Footer from 'src/components/PublicSection/Footer/index';
import FirstStep from '../FirstStep/FirstStep';
import './index.css';

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
          <a href="/">Volver</a>
        </div>
        {!isStartSurvey && <FirstStep type={'teacher'} setIsStartSurvey={setIsStartSurvey} />}

        {isStartSurvey && <Surveys userType={'teacher'} />}
      </main>

      <div style={{ padding: '0 2.4em' }}>
        <Footer />
      </div>
    </>
  );
};

export default ProfessorSurvey;
