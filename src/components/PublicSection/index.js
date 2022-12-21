import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import './PublicSection.css';
import PlanificationType from './Planification/PlanificationType';

const PublicSection = () => {
    return (
        <div>
            <PublicHeader />
            <Welcome />
            <div className='planification-cont'>
                <PlanificationType />
                <PlanificationType />
            </div>
            <PublicFooter />
        </div>
    )
}

export default PublicSection;