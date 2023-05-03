import arrow from 'src/assets/Icons/open-arrow.svg';

const Answer = ({ answer, onClick }) => {
  return (
    <div className="answer-container">
      <div>
        <p>{answer}</p>
      </div>
      <div className="answer-container-alert">
        <div className="answer-alert-icon">
          <p>!</p>
        </div>
        <p className='answer-status'>Requiere atención</p>
      </div>
      <div className='answer-status-button'>
        <button onClick={onClick}>
          Ver más <img src={arrow} alt='img'/>
        </button>
      </div>
    </div>
  )
}

export default Answer;