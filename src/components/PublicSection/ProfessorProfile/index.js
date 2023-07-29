import { useState, useEffect } from 'react';
import Footer from 'src/components/PublicSection/Footer';
import ProfessorInfo from './ProfessorInfo.js';
import StudentNomina from './StudentNomina.js';
import back from 'src/assets/Icons/back-arrow.svg';
import FinishSurveyModal from './FinishSurveyModal';
import { getUserData } from 'src/utils/user';
import config from 'src/config';

import './professor-profile.css';
import SurveyAnalysisModal from './SurveyAnalysisModal/index.js';


const ProfessorProfile = () => {
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [dataPieChart, setDataPieChart] = useState([]);
  const [criticalData, setCriticalData] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

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
      <>
        {showFinishModal && <FinishSurveyModal onClick={() => setShowFinishModal(false)} />}
        {showAnalysisModal && <SurveyAnalysisModal id={selectedAnswer} criticalData={criticalData} dataPieChart={dataPieChart} onClick={() => setShowAnalysisModal(false)} />}
        <button className='profile-back-container' onClick={() => window.history.back()}>
          <img src={back}/>
          Volver
        </button>
        <div className="profile-container">
          <ProfessorInfo onClick={() => setShowFinishModal(true)} />
          <StudentNomina setSelectedAnswer={setSelectedAnswer} setDataPieChart={setDataPieChart} onClick={() => setShowAnalysisModal(true)}/>
        </div>
          <div style={{ padding: '0 2.4em' }}>
            <Footer />
          </div>
      </>
    )
}

export default ProfessorProfile;
