import arrow from 'src/assets/Icons/open-arrow.svg';


const Answer = ({question, status}) => {
  return (
    <div className="answer-container">
      <div>
        <p>{question}</p>
      </div>
      <div className="answer-container-alert">
        <div className="answer-alert-icon">
          <p>!</p>
        </div>
        <p className='answer-status'>{status}</p>
      </div>
      <button>
        Ver más
        <img src={arrow}/>
      </button>
    </div>
  )
}

export default Answer;