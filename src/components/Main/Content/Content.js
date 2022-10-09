import React from 'react';
import Header from 'src/components/Header/Header';
import SurveyBox from '../SurveyBox/SureyBox';
import './Content.css';

const Content = () => {
  return (
    <main className="main-content">
      <Header />
      <SurveyBox />
    </main>
  );
};

export default Content;
