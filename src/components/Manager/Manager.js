import { useState, useEffect } from 'react';
import SectionsHeader from '../SectionsHeader/SectionsHeader';
import ListEstablishment from './ListEstablishments';
import http from 'src/services/helpers/http.helper';
import config from 'src/config';
import './Manager.css';
import background from 'src/assets/images/manager-header.png';

const Manager = () => {
  const [stage, setStage] = useState('Manager');
  const [institutionSelected, setInstitutionSelected] = useState({});
  const [courseSelected, setCourseSelected] = useState({});
  const [establishment, setEstablishment] = useState([]);

  useEffect(() => {
    const getEstablishment = async () => {
      const url = `${config.baseURL}/establishments`;
      const response = await http.get(url);
      await setEstablishment(response.establishments);
    }
    getEstablishment();
  }, []);

  const changeStage = stage => {
    setStage(stage);
  };

  const handleInstitutionSelected = institution => {
    console.log('institution', institution);
    // debugger;
    setInstitutionSelected(institution);
  };

  const handleCourseSelected = course => {
    setCourseSelected(course);
  };

  if (institutionSelected) {
    // TODO: remove this after proper institution selecting to detail working corretly
    sessionStorage.setItem('establishmentId', institutionSelected.id);
  }


  return (
    <>
      <SectionsHeader
        image={background}
        subtitle={
          stage === 'Manager'
            ? 'Manager de establecimientos'
            : institutionSelected.name
        }
      />
      <main className="manager-content">
        <div className="current-path">
          <p className="path__text">{stage}</p>
        </div>

        <ListEstablishment />

        {/* {stage === 'Manager' && (
          <StageManager
            changeStage={changeStage}
            title="A&ntilde;adir Instituci&oacute;n"
            handleInstitutionSelected={handleInstitutionSelected}
          />
        )} */}
        {/* {stage === 'Asignación' && (
          <StageAssignment
            onUpdateInstitution={setInstitutionSelected}
            changeStage={changeStage}
            institutionSelected={institutionSelected}
            onHandleCourseSelected={handleCourseSelected}
            establishment={establishment}
            title="Creaci&oacute;n de cursos"
          />
        )} */}
        {/* {stage === 'Detalle' && (
          <StageDetail
            establishments={establishment}
            institutionSelected={institutionSelected}
            courseSelected={courseSelected}
            changeStage={changeStage}
            title="Detalle de letra"
          />
        )} */}
      </main>
    </>
  );
};

export default Manager;
