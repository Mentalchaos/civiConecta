import { useEffect, useState } from 'react';
import StudentTableBody from './StudentTableBody.js';
import CriticalAnswers from './CriticalAnswers';
import { getUserData } from 'src/utils/user';
import config from 'src/config';
import listIcon from 'src/assets/Icons/student-list.svg';
import './professor-profile.css';


const values = ["Alumno", "Nombre", "Rut", "Encuesta", "Fecha"];

const StudentNomina = ({ onClick, setQuestionId }) => {

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
      <CriticalAnswers onClick={onClick} setQuestionId={setQuestionId} />
      <div className='student-nomina-title'>
        <img className='student-nomina-icon' src={listIcon} alt='img' />
        <p>Nómina</p>
      </div>
      <div className="student-nomina-table-container">
        <div className="student-tablehead">
          {values.map(data => <p key={data} className="student-tablehead-values">{data}</p>)}
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
    </div>
  )
}

StudentNomina.displayName = "StudentNomina";

export default StudentNomina;
