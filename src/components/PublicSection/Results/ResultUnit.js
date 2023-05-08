import ResultPieChart from 'src/components/PublicSection/ProfessorProfile/SurveyAnalysisModal/ResultPieChart.js'

const ResultUnit = ({ id, question, pieChartData }) => {

  const label = [];
  const series = [];

  pieChartData.map(data => label.push(data.label));
  pieChartData.map(data => series.push(data.percentage));

  return (
    <div className='graphic_content'>
      {id === 0 && <p className='graphic_title'>Unidad 1 - Relaciones Interpersonales</p>}
      <p className='graphic_text'>
        {question}
      </p>
      <div className='graphic'>
        <ResultPieChart
          labels={label}
          series={series}
        />
      </div>
    </div>
  )
}

ResultUnit.displayName = 'ResultUnit';

export default ResultUnit;
