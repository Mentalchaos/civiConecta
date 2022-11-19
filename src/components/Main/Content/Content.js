import Header from 'src/components/Header/Header';
import AsideBoxs from '../AsideBoxs/AsideBoxs';
import CreateInstitution from '../CreateInstitution/CreateInstitution';
import SurveyBox from '../SurveyBox/SureyBox';
import Units from '../Units/Units';

import './Content.css';

const Content = () => {
  return (
    <main className="content-dashboard">
      <Header />
      <CreateInstitution />
      <section className="main__section">
        <SurveyBox />
        <Units />
        <AsideBoxs />
      </section>
    </main>
  );
};

export default Content;
