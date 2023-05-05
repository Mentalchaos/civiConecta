import { useState } from 'react';
import Footer from 'src/components/PublicSection/Footer';
import ProfessorInfo from './ProfessorInfo.js';
import StudentNomina from './StudentNomina.js';
import back from 'src/assets/Icons/back-arrow.svg';
import FinishSurveyModal from './FinishSurveyModal';

import './professor-profile.css';
import SurveyAnalysisModal from './SurveyAnalysisModal/index.js';


const ProfessorProfile = () => {
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [questionId, setQuestionId] = useState(null);

    return (
      <>
        {showFinishModal && <FinishSurveyModal onClick={() => setShowFinishModal(false)} />}
        {showAnalysisModal && <SurveyAnalysisModal questionId={questionId} onClick={() => setShowAnalysisModal(false)} />}
        <button className='profile-back-container'>
          <img src={back}/>
          Volver
        </button>
        <div className="profile-container">
          <ProfessorInfo onClick={() => setShowFinishModal(true)} />
          <StudentNomina setQuestionId={setQuestionId} onClick={() => setShowAnalysisModal(true)}/>
        </div>
          <div style={{ padding: '0 2.4em' }}>
            <Footer />
          </div>
      </>
    )
}

export default ProfessorProfile;
