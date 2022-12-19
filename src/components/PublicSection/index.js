import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import './PublicSection.css';

const PublicSection = () => {
    return (
        <div>
            <PublicHeader />
            <Welcome />
            <PublicFooter />
        </div>
    )
}

export default PublicSection;