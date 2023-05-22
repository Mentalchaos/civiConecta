import ResultPieChart from 'src/components/PublicSection/ProfessorProfile/SurveyAnalysisModal/ResultPieChart.js'

const ResultUnit = ({ id, question, pieChartData }) => {

  const label = [];
  const series = [];

  pieChartData.map(data => label.push(data.label));
  pieChartData.map(data => series.push(data.percentage));
  const colors = ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'];
  const arr = ['Se observa una excelente relación con todos los y las docentes Se observa una excelente relación con todos los y las docentes',
    'Se observa una excelente relación con todos los y las docentes',
    'Se observa una excelente relación con todos los y las docentes', 'Se observa una excelente relación con todos los y las docentes']

  return (
    <div className='graphic_content'>
      {id === 0 && <p className='graphic_title'>Unidad 1 - Relaciones Interpersonales</p>}
      <p className='graphic_text'>
        {question}
      </p>
      <div className='graphic-and-answers'>
        <div className='graphic-answers'>
          {
            label.map((text, index) => (
              <div key={index} className='square-label-graphic'>
                <div
                  className='square-graphic'
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <div className='label-text'>
                  {arr[index]}
                </div>
              </div>
            ))
          }
        </div>
        <div className='graphic'>
          <ResultPieChart
            labels={label}
            series={series}
          />
        </div>
      </div>
    </div>
  )
}

ResultUnit.displayName = 'ResultUnit';

export default ResultUnit;
