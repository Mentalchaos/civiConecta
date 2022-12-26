import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import './PublicSection.css';
import PlanificationType from './Planification/PlanificationType';
import PlanificationText from './PlanificationText/PlanificationText';
import SurveyLink from './SurveyLink/SurveyLink';
import UnitsHeader from './Units/UnitsHeader';
import UnitComponent from './Units/UnitComponent';

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
            <div className='units-cont'>
                <UnitsHeader />
                <div className='units-components'>
                    <UnitComponent />
                    <UnitComponent />
                    <UnitComponent />
                    <UnitComponent />
                </div>
            </div>
            <SurveyLink />
            <PublicFooter />
        </div>
    )
}

export default PublicSection;