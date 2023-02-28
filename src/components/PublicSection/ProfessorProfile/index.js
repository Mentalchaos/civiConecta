import './professor-profile.css';
import Footer from 'src/components/PublicSection/Footer';
import ProfessorInfo from './ProfessorInfo.js';
import StudentNomina from './StudentNomina.js';
import back from 'src/assets/Icons/back-arrow.svg';

const ProfessorProfile = () => {
    return (
      <>
        <button className='profile-back-container'>
          <img src={back}/>
          Volver
        </button>
        <div className="profile-container">
          <ProfessorInfo />
          <StudentNomina />
        </div>
          <div style={{ padding: '0 2.4em' }}>
            <Footer />
          </div>
      </>
    )
}

export default ProfessorProfile;
