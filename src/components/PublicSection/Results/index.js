import Footer from '../Footer/index';
import arrowBack from 'src/assets/Icons/back.svg';
import unitLogo from 'src/assets/Icons/unit-section-red.svg';
import PieChart from 'src/components/PublicSection/ProfessorProfile/SurveyAnalysisModal/PieChart.js'
import './Results.css';

const Results = () => {

  return (
    <div>
      <div className='report_results_content'>
        <div className="content-start__back-link">
          <img src={arrowBack} alt="Arrow" />
          <a onClick={() => window.history.back()}>Volver</a>
        </div>
        <div className="report_result">
          <div className='report_result_title_img'>
            <img src={unitLogo} alt="unit-logo" />
            <p className='report_result_title'>Informe de resultados </p>
          </div>
          <p className='report_result_text'> A continuación, encontrarás los resultados de la encuesta aplicada en tu curso.
            Estos datos te muestran un panorama rápido acerca de las debilidades, preocupaciones y
            problemas que está enfrentando el grupo curso, así podrás detectar situaciones preocupantes.
           <p className='report_result_text'> 
              Recuerda que comunicar alertas al Equipo de Convivencia puede ser crucial para apoyar a tus estudiantes.</p>
           </p>
        </div>
        <div className='units_graphic_content'>
          <div className='units_pagination'>
            <div className='selected'>Unidad 1</div>
            <div>Unidad 2</div>
            <div>Unidad 3</div>
            <div>Unidad 4</div>
          </div>
          <div className='graphic_container'>
            <div className='graphic_content'>
              <p className='graphic_title'>Unidad 1 - Relaciones Interpersonales</p>
              <p className='graphic_text'>
                1. ¿Cómo calificarías tu capacidad para reconocer tus cualidades y habilidades,
                por ejemplo: honestidad, respeto, sensibilidad, responsabilidad, solidaridad,
                comunicación, motivación, paciencia, trabajo en equipo, etc.?
              </p>
              <div className='graphic'>
                <PieChart />
              </div>
            </div>

            <div className='graphic_content'>
              <p className='graphic_text'>
                2. ¿Cómo es la relación entre los y las estudiantes de tu curso?
              </p>
              <div className='graphic'>
                <PieChart />
              </div>
            </div>

            <div className='graphic_content'>
              <p className='graphic_text'>
                3. ¿Cuál de las siguientes opciones refleja mejor la relación entre tu curso y
                sus profesores?
              </p>
              <div className='graphic'>
                <PieChart />
              </div>
            </div>

            <div className='graphic_content'>
              <p className='graphic_text'>
                4. ¿Cuánto participas en actividades, tales como, puntos de reciclaje,
                huertos comunitarios, limpieza de espacios comunes, campañas
                informativas, entre otras?
              </p>
              <div className='graphic'>
                <PieChart />
              </div>
            </div>
          </div>

          <div className='button_go_next_unit_container'>
            <button className='button_go_next_unit'>Ir a la siguiente unidad {'>'} </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results;