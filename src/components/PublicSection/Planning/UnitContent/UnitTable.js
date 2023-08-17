import './UnitTable.css';
import arrowWhite from '../../../../assets/Icons/arrow-right-white.svg';
import brain from '../../../../assets/Icons/white-brain.svg';
import { getUserData } from 'src/utils/user';
import config from 'src/config';

const UnitTable = ({ planningData, title, type }) => {
  const { endActivity, startActivity, mainActivity, topic, materials, keywords } = planningData.planning || {};

  const colors = {
    unit: '#96cb76',
    situation: '#2dba9f',
    ephemeris: '#54bfed',
    getStyles: type => ({
      background: {
        backgroundColor: colors[type]
      },
      color: {
        color: colors[type]
      }
    })
  }

  const { background, color } = colors.getStyles(type);

  const getFiles = async () => {
    try {
      const userData = getUserData();
      const response = await fetch(`${config.baseURL}/files/lessons/${planningData.id}`, {
        headers: {
          'Content-Type': 'application/json',
          token: userData.token
        },
        'method': 'GET'
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${topic}.zip`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error('Response not OK:', response);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  return (
    <>
      <div>
        <div className=''>
          <div className='unit-head'>
            <img className='unit-img' src={brain} alt='logo' style={background}></img>
            <div className='green-text' style={color}>{title}</div>
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
              <td className='td table-title corner'>Conceptos a tratar:</td>
              <td className='td corner td-right'>
                { keywords && keywords.map((data, key) => <div key={key} className='materials'>{`- ${data}`}</div>)}
              </td>
            </tr>

            <tr className='table-row'>
              <td className='td table-title'>Materiales:</td>
              <td className='td td-right'>
                <div>Docente:</div>
                <br />
                {materials?.teacher.map((data, key) => <div key={key} className='materials'>{`- ${data}`}</div>)}
                <br></br>
                <div>Alumno:</div>
                <br />
                {materials?.student.map((data, key) => <div key={key} className='materials'>{`- ${data}`}</div>)}
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
        {
          !!planningData?.files?.length &&
          <button className='download-material' onClick={() => getFiles()}>
            Descargar material
            <img className='button-image' src={arrowWhite} alt=''></img>
          </button>
        }

      </div>
    </>
  )
}

UnitTable.displayName = 'UnitTable';

export default UnitTable;
