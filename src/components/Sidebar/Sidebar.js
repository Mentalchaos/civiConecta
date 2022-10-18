import React from 'react';
import { Link } from 'react-router-dom';
import home from 'src/components/UI/Icons/home.svg';
import teacher from 'src/components/UI/Icons/teacher.svg';
import student from 'src/components/UI/Icons/student.svg';
import blackboard from 'src/components/UI/Icons/blackboard.svg';
import school from 'src/components/UI/Icons/school.svg';

import './Sidebar.css';

const NavButton = ({ icon, ariaLabel, path }) => {
  return (
    <Link to={path} className="nav-button" type="button" aria-label={ariaLabel}>
      <img src={icon} alt={ariaLabel} />
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
      </div>
    </nav>
  );
};

export default Sidebar;
