import './professor-profile.css';
import Footer from 'src/components/PublicSection/Footer';
import ProfessorInfo from './ProfessorInfo.js';
import StudentNomina from './StudentNomina.js';

const ProfessorProfile = () => {
    return (
      <>
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
