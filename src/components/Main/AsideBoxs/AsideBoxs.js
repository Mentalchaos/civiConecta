import React from 'react';

import './AsideBoxs.css';

const AsideBoxs = ({ events = 0 }) => {
  return (
    <aside className="container-boxs">
      <article className="boxs-situations boxs">
        <div className="boxs__header">
          <span className="boxs-header__title">Situaciones emergentes</span>
          <span className="boxs-header__events">Hay {events} eventos</span>
        </div>
      </article>
      <article className="boxs-ephemeris boxs">
        <div className="boxs__header">
          <span className="boxs-header__title">Efem&eacute;rides</span>
          <span className="boxs-header__events">Hay {events} eventos</span>
        </div>
      </article>
    </aside>
  );
};

export default AsideBoxs;
