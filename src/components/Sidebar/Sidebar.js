import React from 'react';
import BoardIcon from '../UI/Icons/Board';
import HomeIcon from '../UI/Icons/Home';
import StudentIcon from '../UI/Icons/Student';
import TeacherIcon from '../UI/Icons/Teacher';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__content">
        <HomeIcon />
        <TeacherIcon />
        <StudentIcon />
        <BoardIcon />
      </div>
    </nav>
  );
};

export default Sidebar;
