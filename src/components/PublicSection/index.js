import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import PlanificationType from './Planification/PlanificationType';
import PlanificationText from './PlanificationText/PlanificationText';
import SurveyLink from './SurveyLink/SurveyLink';
import UnitsHeader from './Units/UnitsHeader';
import UnitComponent from './Units/UnitComponent';
import UnitSituations from './Units/UnitSituations';
import './PublicSection.css';

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
                    <div className='units-components-two'>
                        <UnitSituations />
                        <UnitSituations />
                    </div>
                </div>
            </div>
            <SurveyLink />
            <PublicFooter />
        </div>
    )
}

export default PublicSection;