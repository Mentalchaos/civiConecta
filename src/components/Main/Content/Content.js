import React from 'react';
import Header from 'src/components/Header/Header';
import SurveyBox from '../SurveyBox/SureyBox';
import Units from '../Units/Units';

import './Content.css';

const Content = () => {
  return (
    <main className="main-content">
      <Header />
      <section className="main__section">
        <SurveyBox />
        <Units />
      </section>
    </main>
  );
};

export default Content;
