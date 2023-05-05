import { useState, useEffect } from 'react';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import Answer from './Answer';
import criticalIcon from 'src/assets/Icons/critical-icon.svg';

const CriticalAnswers = ({ onClick, setQuestionId }) => {

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
              setQuestionId={setQuestionId}
            />)
        }
      </div>
    </div>
  )
}

export default CriticalAnswers;
