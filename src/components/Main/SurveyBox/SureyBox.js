import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import teacherImage from 'src/assets/images/teacher-survey.png';
import studentImage from 'src/assets/images/student-survey.png';
import teacherIcon from 'src/components/UI/Icons/teacher.svg';
import studentIcon from 'src/components/UI/Icons/student.svg';
import schoolIcon from 'src/components/UI/Icons/school.svg';
import linkTo from 'src/components/UI/Icons/link-to.svg';

import './SurveyBox.css';

const BoxContent = ({ icon, title, subtitle, image, notification }) => {
  const [isHover, setIsHover] = useState(false);
  const changeColor =
    icon === teacherIcon ? 'var(--color-primary)' : 'var(--color-secondary)';
  const arrowOpacity =
    icon === teacherIcon
      ? 'opacity(0.8) drop-shadow(0 0 0 blue) brightness(210%)'
      : 'opacity(0.8) drop-shadow(0 0 0 red) brightness(210%)';

  return (
    <main
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        borderColor: isHover && changeColor,
        boxShadow: isHover && 'none',
      }}
      className="box"
    >
      <header className="box__header">
        <BoxIcon
          svg={icon}
          background={
            icon === teacherIcon ? 'color-primary' : 'color-secondary'
          }
        />
        <div className="header__text">
          <p>{title} </p>
          <small
            style={{
              color: isHover && changeColor,
              boxShadow: isHover && 'none',
            }}
          >
            {subtitle}
          </small>
        </div>
        {notification && <span className="header__notification-circle"></span>}
      </header>
      <img
        style={{ opacity: isHover && '0.8' }}
        className="box__image"
        src={image}
        width="239px"
        alt="teacher"
      />
      <button type="button" className="box__link-to">
        <p
          style={{
            color: isHover && changeColor,
            boxShadow: isHover && 'none',
          }}
          className="link-to__open-survey"
        >
          Abrir encuesta
        </p>
        <img
          style={{
            filter: isHover && arrowOpacity,
          }}
          src={linkTo}
          alt="go to"
        />
      </button>
    </main>
  );
};

const SurveyBox = () => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="content">
      <article
        style={{
          borderColor: isHover && '#95CA76',
          boxShadow: isHover && 'none',
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => navigate('/admin/manager')}
        className="box create-school"
      >
        <header className="box__header">
          <BoxIcon svg={schoolIcon} background="color-green" />
          <div className="header__text">
            <p>Crear Instituci&oacute;n</p>
            <small>
              Acceder a la creación de colegio, <br /> escuela o liceo.
            </small>
          </div>
        </header>
        <button
          style={{ color: isHover && '#95CA76' }}
          type="button"
          className="box__link-to"
        >
          Comenzar
          <img
            style={{
              filter:
                isHover &&
                'opacity(0.4) drop-shadow(0 0 0 green) brightness(170%)',
            }}
            className="box-link__icon"
            src={linkTo}
            alt="go to"
          />
        </button>
      </article>
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
