import { useState, useEffect } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import Answer from './Answer';
import criticalIcon from 'src/assets/Icons/critical-icon.svg';
import Visible from 'src/components/UI/Visible';

const CriticalAnswers = ({ onClick, setDataPieChart, setSelectedAnswer }) => {

  const [criticalData, setCriticalData] = useState([]);

  const getCriticalAnswers = async () => {
    const userData = getUserData();
    const baseURL = `${config.baseURL}/reports/student-answers/${userData.uuid}/critical-answers`;

    const response = await fetch(baseURL, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    const data = await response.json();
    setCriticalData(data.results);
  };
  useEffect(() => {
    getCriticalAnswers();
  }, []);

  return (

    <Visible condition={criticalData.length}>
      <div className='critical-answers-container'>
        <div className='critical-answers-title'>
          <img src={criticalIcon} alt='img' />
          <p>Respuestas críticas</p>
        </div>
        <div className='critical-answers-units'>
          {
            criticalData && criticalData.map((data) =>
              <Answer
                key={data.questionId}
                id={data.questionId}
                answer={data.description}
                onClick={onClick}
                setDataPieChart={setDataPieChart}
                setSelectedAnswer={setSelectedAnswer}
              />)
          }
        </div>
      </div>
    </Visible>
  )
}

export default CriticalAnswers;
