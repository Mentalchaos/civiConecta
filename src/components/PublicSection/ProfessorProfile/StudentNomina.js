import './professor-profile.css';
import StudentTableBody from './StudentTableBody.js';
import listIcon from 'src/assets/Icons/student-list.svg';

const values = ["Alumno", "Nombre", "Rut", "Encuesta", "Fecha"];
const tbodyValues = ["01","Eduardo Cossio Brante", "24.040.904-9","Pendiente", "24/08/22"];

const StudentNomina = () => {
  return (
    <div className="student-nomina-container">
      <div className='student-nomina-title'>
        <img className='student-nomina-icon' src={listIcon} />
        <p>Nómina</p>
      </div>
      <div className="student-nomina-table-container">
        <div className="student-tablehead">
          { values.map(data => <p key={data} className="student-tablehead-values">{data}</p>)}
        </div>
        <div className="tbody-cont">
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>
          <StudentTableBody value={tbodyValues}/>

          <div className="student-tablebody">
            { tbodyValues.map(data => <p key={data} className="student-tablebody-values">{data}</p>)}
          </div>
          <div className="student-tablebody">
            { tbodyValues.map(data => <p key={data} className="student-tablebody-values">{data}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

StudentNomina.displayName = "StudentNomina";

export default StudentNomina;
