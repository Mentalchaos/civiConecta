import brain from '../../../../assets/Icons/white-brain.svg';
import arrowWhite from '../../../../assets/Icons/arrow-right-white.svg';
import './UnitTable.css';

const MobileUnitTable = ({ shouldShowAdditionalRow, background, color, planningData, imBlind, title, type }) => {
  const { endActivity, startActivity, mainActivity, topic, materials, keywords } = planningData.planning || {};
  const { number } = planningData.unit || {};
  const { objective } = planningData || {};

  const convertToRoman = num => {
    let roman = '';
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  
    for (let i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  const romanNumber = convertToRoman(number);

  return (
    <>
      {type == 'ephemeris' && (
          <div className='unit-head'>
            <img className='unit-img' src={brain} alt='logo' style={background}></img>
            <div>
              <p className='mobile-unit-title'>{title}</p>
            </div>
          </div>
        )}
        { type == 'unit' && (
          <div className='unit-head'>
            <img className='unit-img' src={brain} alt='logo' style={background}></img>
            <div className='unit-info-header'>
              <div className='green-text' style={color}>Unidad {romanNumber}</div>
              <div className='mobile-unit-title'>{planningData?.unit?.title}</div>
              <div className='mobile-class-number'>Clase {planningData.number}</div>
            </div>
          </div>
        )}

        {
          type == 'situation' && <div className='unit-head'>
          <img className='unit-img' src={brain} alt='logo' style={background}></img>
          <div className='unit-info-header'>
            <div className='mobile-unit-title'>{topic}</div>
          </div>
        </div>
        }

      <div className='mobile-unit-cont'>
        {!shouldShowAdditionalRow && (
            <div className='mobile-unit-label'>
              <p className='unit-label'>Tema clase:</p>
              <p className='label-description'>{topic}</p>
            </div>
        )}
        
        {shouldShowAdditionalRow && (
          <div className='mobile-unit-label'>
            <p className='unit-label'>Objetivo de la clase:</p>
            <p className='label-description'>{objective}</p>
          </div>
        )}
        {!shouldShowAdditionalRow && (
            <div className='mobile-unit-label'>
              <p className='unit-label'>Conceptos a tratar:</p>
              {keywords && keywords.map((data, key) => <div className='unit-materials' key={key}>{`- ${data}`}</div>)}
            </div>
        )}

        <div className='mobile-unit-label'>
          <p className='unit-label'>Materiales necesarios:</p>
          <div className='label-description' style={{paddingLeft: '10px', margin: '0.5em 0'}}>Docente:</div>
          {materials?.teacher.map((data, key) => <div className='unit-materials' key={key}>{`- ${data}`}</div>)}
          <div className='label-description' style={{paddingLeft: '10px', margin: '0.5em 0'}}>Estudiantes:</div>
          {materials?.student.map((data, key) => <div className='unit-materials' key={key}>{`- ${data}`}</div>)}
        </div>
        <div className='mobile-unit-label'>
          <p className='unit-label'>Actividad de inicio:</p>
          <p className='label-description'>{startActivity}</p>
        </div>
        <div className='mobile-unit-label'>
          <p className='unit-label'>Actividad central:</p>
          <p className='label-description'>{mainActivity}</p>
        </div>
        <div className='mobile-unit-label'>
          <p className='unit-label'>Actividad de cierre:</p>
          <p className='label-description'>{endActivity}</p>
        </div>
      </div>
      <div className='mobile-unit-button'>
      {
        !!planningData?.files?.length &&
        <button className='download-material' onClick={() => imBlind()} style={background}>
          Descargar material
          <img className='button-image' src={arrowWhite} alt=''></img>
        </button>
      }
      </div>
    </>
  )
}

export default MobileUnitTable;