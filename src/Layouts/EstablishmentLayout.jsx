import PropTypes from 'prop-types';
import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import background from 'src/assets/images/manager-header.png';

const EstablishmentLayout = ({ title, subtitle, children }) => {
  return (
    <>
      <SectionsHeader
        image={background}
        subtitle={title}
      />
      <main className="manager-content">
        <div className="current-path">
          <p className="path__text">{subtitle}</p>
        </div>
        {children}
      </main>
    </>
  );
};

EstablishmentLayout.defaultProps = {
  title: '',
  subtitle: 'Manager'
};

EstablishmentLayout.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default EstablishmentLayout;
