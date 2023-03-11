import React, { Fragment } from 'react';

const EphemerisLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="main-content">
        <header className="header">
          <h1 className="header__title">
            CIVI <span>admin</span>
          </h1>
        </header>
        <div className="header__subtitle">Efemérides</div>
        <div className="body-content">{children}</div>
      </div>
    </Fragment>
  );
};

export default EphemerisLayout;
