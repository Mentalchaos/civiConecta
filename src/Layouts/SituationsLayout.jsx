import React, { Fragment } from 'react';

const SituationsLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="main-content">
        <header className="header">
          <h1 className="header__title">
            CIVI <span>admin</span>
          </h1>
        </header>
        <span className="header__subtitle">Situaciones emergentes</span>
        <div className="body-content">{children}</div>
      </div>
    </Fragment>
  );
};

export default SituationsLayout;
