import { useState, useEffect } from 'react';
import ResultPieChart from 'src/components/PublicSection/ProfessorProfile/SurveyAnalysisModal/ResultPieChart.js'
import unitIcon from 'src/assets/Icons/graduation-cap.svg'

const ResultUnit = ({ id, question, pieChartData, unitTopic, selectedUnit }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const label = [];
  const series = [];

  pieChartData.map(data => label.push(data.label));
  pieChartData.map(data => series.push(data.percentage));

  const colors = ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'];

  return (
    <div className='graphic_content'>
      {(isMobile || id === 0) && (
        <div className='graphic-content_first'>
          <div>
            <img className='graphic_title_img' src={unitIcon} alt="Unidad icono"/>
          </div>
          <div className='graphic_content_container'>
            <p className='graphic_title'>
            {`Unidad ${selectedUnit + 1}`}
            </p>
            <p className='graphic_title graphic_unit'>{unitTopic}</p>
          </div>
        </div>
      )}
      <p className='graphic_text'>
        {question}
      </p>
      <div className='graphic-and-answers'>
        <div className='graphic-answers'>
          {
            label.map((_, index) => (
              <div key={index} className='square-label-graphic'>
                <div
                  className='square-graphic'
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <div className='label-text'>
                  {label[index]}
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
