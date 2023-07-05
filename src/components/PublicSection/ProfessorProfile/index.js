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
  const [dataPieChart, setDataPieChart] = useState([]);

    return (
      <>
        {showFinishModal && <FinishSurveyModal onClick={() => setShowFinishModal(false)} />}
        {showAnalysisModal && <SurveyAnalysisModal dataPieChart={dataPieChart} onClick={() => setShowAnalysisModal(false)} />}
        <button className='profile-back-container' onClick={() => window.history.back()}>
          <img src={back}/>
          Volver
        </button>
        <div className="profile-container">
          <ProfessorInfo onClick={() => setShowFinishModal(true)} />
          <StudentNomina setDataPieChart={setDataPieChart} onClick={() => setShowAnalysisModal(true)}/>
        </div>
          <div style={{ padding: '0 2.4em' }}>
            <Footer />
          </div>
      </>
    )
}

export default ProfessorProfile;
