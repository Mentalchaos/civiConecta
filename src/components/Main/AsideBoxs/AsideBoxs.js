import React from 'react';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import emergentesIcon from 'src/assets/Icons/folder.svg';
import efemeridesIcon from 'src/assets/Icons/calendar.svg';

import situacionesImage from 'src/assets/images/emergentes-image.png';
import efemeridesImage from 'src/assets/images/efemerides-image.png';
import './AsideBoxs.css';

const AsideBoxs = ({ events = 0 }) => {
  return (
    <aside className="container-boxs">
      <article className="boxs-situations boxs">
        <header className="boxs__header">
          <BoxIcon svg={emergentesIcon} background="color-primary" />
          <div className="header__info-text">
            <span className="boxs-header__title">Situaciones emergentes</span>
            <span className="boxs-header__events">Hay {events} eventos</span>
          </div>
        </header>
        <img
          className="boxs__image"
          src={situacionesImage}
          alt="imagen situaciones emergentes"
        />
      </article>
      <article className="boxs-ephemeris boxs">
        <header className="boxs__header">
          <BoxIcon svg={efemeridesIcon} background="color-primary" />
          <div className="header__info-text">
            <span className="boxs-header__title">Efem&eacute;rides</span>
            <span className="boxs-header__events">Hay {events} eventos</span>
          </div>
        </header>
        <img
          className="boxs__image"
          src={efemeridesImage}
          alt="imagen situaciones emergentes"
        />
      </article>
    </aside>
  );
};

export default AsideBoxs;
