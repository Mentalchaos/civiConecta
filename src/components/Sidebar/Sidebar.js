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

import './Sidebar.css';

const NavButton = ({ icon, ariaLabel, path, ...props }) => {
  return (
    <Link to={path} className="nav-button" type="button" aria-label={ariaLabel}>
      <img src={icon} alt={ariaLabel} {...props} />
    </Link>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__content">
        <NavButton icon={home} ariaLabel="home" path={'/admin'} />
        <NavButton icon={teacher} ariaLabel="teacher" />
        <NavButton icon={student} ariaLabel="student" />
        <NavButton icon={blackboard} ariaLabel="blackboard" />
        <NavButton icon={school} ariaLabel="school" path={'/admin/manager'} />
        <NavButton icon={folder} ariaLabel="folder" />
        <NavButton icon={calendar} ariaLabel="calendar" />
        <NavButton
          path={'/login'}
          icon={exit}
          ariaLabel="exit"
          style={{ width: '25px', position: 'absolute', left: 15, bottom: 15 }}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
