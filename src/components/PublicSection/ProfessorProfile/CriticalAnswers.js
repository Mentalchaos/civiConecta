import criticalIcon from 'src/assets/Icons/critical-icon.svg';

const CriticalAnswers = () => {
  return (
    <div className='critical-answers-container'>
      <div className='critical-answers-title'>
        <img src={criticalIcon}/>
        <p>Respuestas críticas</p>
      </div>
    </div>
  )
}

export default CriticalAnswers;