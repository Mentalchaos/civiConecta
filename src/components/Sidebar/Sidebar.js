import React from 'react';
import { Link } from 'react-router-dom';
import { clearUserData } from 'src/utils/user';
import home from 'src/assets/Icons/home.svg';
import teacher from 'src/assets/Icons/teacher.svg';
import student from 'src/assets/Icons/student.svg';
import blackboard from 'src/assets/Icons/blackboard.svg';
import school from 'src/assets/Icons/school.svg';
import folder from 'src/assets/Icons/folder.svg';
import calendar from 'src/assets/Icons/calendar.svg';
import exit from 'src/assets/Icons/exit.svg';
import './Sidebar.css';

const NavButton = ({ icon, ariaLabel, path, handleClick, text, ...props }) => {
  return (
    <Link as="a" to={path} onClick={handleClick} className="nav-button" type="button" aria-label={ariaLabel}>
      <div className='nav-icon'>
        <img id='exitImg' src={icon} alt={ariaLabel} {...props} />
      </div>
      <div className='nav-label'>
        <label>{text}</label>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const handleClear = () => {
    clearUserData();
  };

  return (
    <nav className="sidebar">
      <div className="sidebar__content">
        <NavButton icon={home} text="Inicio" ariaLabel="home" path={'dashboard'} />
        <NavButton icon={teacher} text="Docente" ariaLabel="teacher" path={'teacher-survey'} />
        <NavButton icon={student} text="Estudiante" ariaLabel="student" path={'student-survey'} />
        <NavButton icon={blackboard} text="Unidades" ariaLabel="blackboard" path={'units'} />
        <NavButton icon={school} text="Institución" ariaLabel="school" path={'manager'} />
        <NavButton icon={folder} text="Situaciones Emergentes" ariaLabel="folder" path={'situations'} />
        <NavButton icon={calendar} text="Efemérides" ariaLabel="calendar" path={'ephemeris'} />
        <NavButton
          path="/"
          handleClick={handleClear}
          icon={exit}
          ariaLabel="exit"
          text="Salir"
        />
      </div>
    </nav>
  );
};

export default Sidebar;
