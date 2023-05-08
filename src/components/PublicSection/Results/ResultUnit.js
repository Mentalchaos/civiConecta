import ResultPieChart from 'src/components/PublicSection/ProfessorProfile/SurveyAnalysisModal/ResultPieChart.js'

const ResultUnit = ({ id, data }) => {
  console.log('id', id);


  return (
    <div className='graphic_content'>
      { id == 0 && <p className='graphic_title'>Unidad 1 - Relaciones Interpersonales</p>}
      <p className='graphic_text'>
        {/*
          En vez de este texto de aca aqui deberia
          estar el titulo que se encuentra en el elemento 'question'
          Actualmente ese texto en cada vuelta nos muestra 'pregunta tres' y 'pregunta cuatro'
        */}
        1. ¿Cómo calificarías tu capacidad para reconocer tus cualidades y habilidades,
        por ejemplo: honestidad, respeto, sensibilidad, responsabilidad, solidaridad,
        comunicación, motivación, paciencia, trabajo en equipo, etc.?
      </p>
      <div className='graphic'>
        <ResultPieChart />
      </div>
    </div>
  )
}

ResultUnit.displayName = 'ResultUnit';

export default ResultUnit;
