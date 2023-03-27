import './UnitTable.css';
import arrowWhite from '../../../../assets/Icons/arrow-right-white.svg';

const UnitTable = () => {
    return (
        <div className=''>

            <table className=''>

            <tr className='table-row'>
                <td className='td table-title corner'>Tema clase:</td>
                <td className='td corner td-right'>Manejo del estrés</td>
            </tr>

            <tr className='table-row'>
                <td className='td table-title'>Materiales:</td>
                <td className='td td-right'>
                    <div>.Docente:</div>
                    <br></br>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;-Proyector</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;-Parlantes</div>
                    <br></br>
                    <div>.Docente:</div>
                    <br></br>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;-Cartulina</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;-Pegamento</div>
                </td>
            </tr>

            <tr className='table-row'>
                <td className='td table-title'>Actividad de inicio:</td>
                <td className='td td-right'>Estudiantes analizan imágenes de personas e identifican cuáles están estresadas y cuáles no.</td>
            </tr>

            <tr className='table-row'>
                <td className='td table-title'>Actividad de central:</td>
                <td className='td td-right'>Estudiantes fabrican un slime y reflexionan sobre la experiencia.</td>
            </tr>
                
            <tr className='table-row'>
                <td className='td table-title td-end'>Actividad de cierre:</td>
                <td className='td td-end td-right'>Estudiantes juegan libremente con el slime que fabricaron y reflexionan sobre la experiencia.</td>
            </tr>
            
            </table>

            <button className='download-material'>
                Descargar material
                <img className='button-image' src={arrowWhite} alt=''></img>
            </button>
        </div>
    )
}

export default UnitTable;