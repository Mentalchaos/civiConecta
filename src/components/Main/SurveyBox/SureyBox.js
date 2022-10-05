import React from 'react';
import teacherImage from 'src/assets/images/teacher-survey.png';
import studentImage from 'src/assets/images/student-survey.png';
import teacherIcon from 'src/components/UI/Icons/teacher.svg';
import studentIcon from 'src/components/UI/Icons/student.svg';
import linkTo from 'src/components/UI/Icons/link-to.svg';

import './SurveyBox.css';

const BoxContent = ({ icon, title, subtitle, image, notification }) => {
  return (
    <main className="box">
      <header className="box__header">
        <img
          className="header__icon"
          src={icon}
          style={
            icon === teacherIcon
              ? { backgroundColor: 'var(--color-primary)' }
              : { backgroundColor: 'var(--color-secondary)' }
          }
          alt="icon"
          width="32"
          height="25"
        />
        <div className="header__text">
          <p>{title} </p>

          <small>{subtitle}</small>
        </div>
        {notification && <span className="header__notification-circle"></span>}
      </header>
      <img className="box__image" src={image} width="239px" alt="teacher" />
      <button type="button" className="box__link-to">
        <p className="link-to__open-survey">Abrir encuesta</p>
        <img src={linkTo} alt="go to" />
      </button>
    </main>
  );
};

const SurveyBox = () => {
  return (
    <section className="content">
      <BoxContent
        notification={true}
        icon={teacherIcon}
        title="Encuesta al docente"
        subtitle="Incompleto"
        image={teacherImage}
      />
      <BoxContent
        notification={true}
        icon={studentIcon}
        title="Encuesta al estudiante"
        subtitle="Incompleto"
        image={studentImage}
      />
    </section>
  );
};

export default SurveyBox;
