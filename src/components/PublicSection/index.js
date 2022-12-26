import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import './PublicSection.css';
import PlanificationType from './Planification/PlanificationType';
import PlanificationText from './PlanificationText/PlanificationText';

const PublicSection = () => {
    return (
        <div>
            <PublicHeader />
            <Welcome />
            <PlanificationText />
            <div className='planification-cont'>
                <PlanificationType />
                <PlanificationType />
            </div>
            <PublicFooter />
        </div>
    )
}

export default PublicSection;