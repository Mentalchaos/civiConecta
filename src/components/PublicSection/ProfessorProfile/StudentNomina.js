import { useEffect, useState } from 'react';
import StudentTableBody from './StudentTableBody.js';
import CriticalAnswers from './CriticalAnswers';
import { getUserData } from 'src/utils/user';
import config from 'src/config';
import listIcon from 'src/assets/Icons/student-list.svg';
import './professor-profile.css';
import Visible from 'src/components/UI/Visible';

const values = ["Estudiante", "Nombre", "Rut", "Encuesta", "Porcentaje Encuesta"];

const StudentNomina = ({ onClick, setDataPieChart }) => {

  const [studentData, setStudentData] = useState([]);

  const getStudentNomina = async () => {

    const userData = getUserData();
    const baseURL = `${config.baseURL}/reports/student-completion/${userData.uuid}`;

    const response = await fetch(baseURL, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    const data = await response.json();
    setStudentData(data.report)

  };
  useEffect(() => {
    getStudentNomina();
  }, []);

  return (
    <div className="student-nomina-container">
      <CriticalAnswers setDataPieChart={setDataPieChart} onClick={onClick} />
      <Visible condition={studentData.length}>
        <div className='student-nomina-title'>
          <img className='student-nomina-icon' src={listIcon} alt='img' />
          <p>Nómina</p>
        </div>
        <div className="student-nomina-table-container">
          <div className="student-tablehead">
            {values.map(data => {
              const name = data == 'Nombre' ? 'center' : null;
              return (
                <p key={data} style={{ textAlign: name }} className="student-tablehead-values">{data}</p>
              )
            }
            )}
          </div>
          <div className="tbody-cont">
            {
              studentData && studentData.map((data, key) =>
                <StudentTableBody
                  key={data.run}
                  id={key + 1}
                  data={data}
                />
              )}
          </div>
        </div>
      </Visible>
      <Visible condition={!studentData.length}>
        <p style={{textAlign: 'Center',marginTop: '50px', fontSize: '16px'}}>Comparte la encuesta con tus estudiantes para poder personalizar tu planificación</p>
      </Visible>
    </div>
  )
}

StudentNomina.displayName = "StudentNomina";

export default StudentNomina;
