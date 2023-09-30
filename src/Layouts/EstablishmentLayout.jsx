import SectionsHeader from 'src/components/SectionsHeader/SectionsHeader';
import background from 'src/assets/images/manager-header.png';

const EstablishmentLayout = ({ title, children }) => {
  return (
    <>
      <SectionsHeader
        image={background}
        subtitle={title}
      />
      <main className="manager-content">
        <div className="current-path">
          <p className="path__text">Manager</p>
        </div>
        {children}
      </main>
    </>
  );
};

export default EstablishmentLayout;
