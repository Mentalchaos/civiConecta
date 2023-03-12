import criticalIcon from 'src/assets/Icons/critical-icon.svg';
import Answer from './Answer';

const criticsData = [
  {
    question: '1.- ¿Cómo calificarías tu capacidad para reconocer tus cualidades y habilidades...',
    status: 'Requiere atención'
  },
  {
    question: '5.-¿Cómo evaluarías la comunicación y el respeto de opiniones entre las y los...',
    status: 'Requiere atención'
  },
  {
    question: '13.- ¿Qué te genera más estrés (tensión, preocupación excesiva)?',
    status: 'Requiere atención'
  }
]

const CriticalAnswers = ({onClick}) => {
  return (
    <div className='critical-answers-container'>
      <div className='critical-answers-title'>
        <img src={criticalIcon}/>
        <p>Respuestas críticas</p>
      </div>
      <div className='critical-answers-units'>
        {
          criticsData.map(critics => 
          <Answer
          question={critics.question}
          status={critics.status}
          onClick={onClick}
          />)
        }
      </div>
    </div>
  )
}

export default CriticalAnswers;