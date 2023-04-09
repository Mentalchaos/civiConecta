import './UnitTable.css';
import arrowWhite from '../../../../assets/Icons/arrow-right-white.svg';
import brain from '../../../../assets/Icons/white-brain.svg';

const UnitTable = ({ planningData, title }) => {
  const { endActivity, startActivity, mainActivity, topic, materials } = planningData.planning || {};

  return (
    <>
      <div>
        <div className=''>
          <div className='unit-head'>
            <img className='unit-img' src={brain} alt='logo'></img>
            <div className='green-text'>{title}</div>
            <div> / Clase {planningData.id} </div>
          </div>
        </div>
      </div>
      <div className=''>
        <table className=''>
          <tbody>
            <tr className='table-row'>
              <td className='td table-title corner'>Tema clase:</td>
              <td className='td corner td-right'>{topic}</td>
            </tr>

            <tr className='table-row'>
              <td className='td table-title'>Materiales:</td>
              <td className='td td-right'>
                <div>Docente:</div>
                <br/>
                {materials?.student.map((data, key) => <div key={key} className='materials'>{`- ${data}`}</div>)}
                <br></br>
                <div>Alumno:</div>
                <br/>
                {materials?.teacher.map((data, key) => <div key={key} className='materials'>{`- ${data}`}</div>)}
              </td>
            </tr>

            <tr className='table-row'>
              <td className='td table-title'>Actividad de inicio:</td>
              <td className='td td-right'>{startActivity}</td>
            </tr>

            <tr className='table-row'>
              <td className='td table-title'>Actividad de central:</td>
              <td className='td td-right'>{mainActivity}</td>
            </tr>

            <tr className='table-row'>
              <td className='td table-title td-end'>Actividad de cierre:</td>
              <td className='td td-end td-right'>{endActivity}</td>
            </tr>
          </tbody>
        </table>

        <button className='download-material'>
          Descargar material
          <img className='button-image' src={arrowWhite} alt=''></img>
        </button>
      </div>
    </>
  )
}

UnitTable.displayName = 'UnitTable';

export default UnitTable;
