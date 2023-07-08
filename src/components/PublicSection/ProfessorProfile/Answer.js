import { getUserData } from 'src/utils/user';
import config from 'src/config';
import arrow from 'src/assets/Icons/open-arrow.svg';

const Answer = ({ id, answer, onClick, setDataPieChart }) => {

  const newClick = async () => {
    await callData();
    await onClick();
  }

  const callData = async () => {
    const userData = getUserData();
    const baseURL = `${config.baseURL}/reports/student-answers/${userData.uuid}/${id}`;
    const response = await fetch(baseURL, {
      headers: {
        token: getUserData().token,
        "Content-Type": "application/json"
      },
      method: "GET"
    })

    const data = await response.json();
    await setDataPieChart(data.results[0].questions[0].answers);
  }

  const formattedAnswer = answer.length > 120 ? `${answer.slice(0,80)} ...` : answer;

  return (
    <div className="answer-container">
      <div>
        <p>{formattedAnswer}</p>
      </div>
      <div className="answer-container-alert">
        <div className="answer-alert-icon">
          <p>!</p>
        </div>
        <p className='answer-status'>Requiere atención</p>
      </div>
      <div className='answer-status-button'>
        <button onClick={() => newClick()}>
          Ver más <img src={arrow} alt='img'/>
        </button>
      </div>
    </div>
  )
}

export default Answer;
