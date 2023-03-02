import { Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import headerImage from 'src/assets/images/background-units.png';

const UnitLayout = ({ children }) => {
  return (
    <Fragment>
      <SectionsHeader image={headerImage} subtitle="Unidades" />
      <main className="main-content">
        {children}
      </main>
    </Fragment>
  );
};

UnitLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default UnitLayout;
