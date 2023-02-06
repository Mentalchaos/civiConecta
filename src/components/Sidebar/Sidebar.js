import React from 'react';
import { Link } from 'react-router-dom';
import home from 'src/assets/Icons/home.svg';
import teacher from 'src/assets/Icons/teacher.svg';
import student from 'src/assets/Icons/student.svg';
import blackboard from 'src/assets/Icons/blackboard.svg';
import school from 'src/assets/Icons/school.svg';
import folder from 'src/assets/Icons/folder.svg';
import calendar from 'src/assets/Icons/calendar.svg';
import exit from 'src/assets/Icons/exit.svg';
import cookie from '../../utils/cookie';

import './Sidebar.css';

const NavButton = ({ icon, ariaLabel, path, handleClick, ...props }) => {
  return (
    <Link as="a" to={path} onClick={handleClick} className="nav-button" type="button" aria-label={ariaLabel}>
      <img src={icon} alt={ariaLabel} {...props} />
    </Link>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__content">
        <NavButton icon={home} ariaLabel="home" path={'dashboard'} />
        <NavButton icon={teacher} ariaLabel="teacher" path={'teacher-survey'} />
        <NavButton icon={student} ariaLabel="student" path={'student-survey'} />
        <NavButton icon={blackboard} ariaLabel="blackboard" path={'units'} />
        <NavButton icon={school} ariaLabel="school" path={'manager'} />
        <NavButton icon={folder} ariaLabel="folder" path={'situations'} />
        <NavButton icon={calendar} ariaLabel="calendar" path={'ephemeris'} />
        <NavButton
          path="/"
          handleClick={() => {
            cookie.removeCookie('token');
            localStorage.clear();
          }}
          icon={exit}
          ariaLabel="exit"
          style={{ width: '25px', position: 'absolute', left: 15, bottom: 15 }}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
