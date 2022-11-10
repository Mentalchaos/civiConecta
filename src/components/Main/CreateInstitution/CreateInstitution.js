import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxIcon from 'src/components/UI/BoxIcon/BoxIcon';
import schoolIcon from 'src/assets/Icons/school.svg';
import linkTo from 'src/assets/Icons/link-to.svg';

import './CreateInstitution.css';

const CreateInstitution = () => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
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
          <small>Acceder a la creación de colegio, escuela o liceo.</small>
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
  );
};

export default CreateInstitution;
