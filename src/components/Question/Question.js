import questionIcon from 'src/assets/images/question-icon.png';
import './Question.css';

const Question = () => {
    return (
        <main className="main-question-container">
            <div>
                <div className='question-container'>
                    <img src={questionIcon} alt="question-icon"/>
                    <p className='question-title'>Título encuesta</p>
                </div>
            </div>
            <div className='delete-container'>
               <button className='delete-button'>X</button>
            </div>
            <div className='edit-question-container'>
                <div>
                    <input className='question' placeholder='1.- Escriba su pregunta en este campo'></input>
                </div>
                <div className='options-container'>
                    <div className='option-component'>
                        <button className='color-button'></button>
                        <input className='option' placeholder='Añada una opción.'></input>
                    </div>
                    <div>
                        <button className='color-button'></button>
                        <input className='option' placeholder='Añada una opción.'></input>
                    </div>
                    <div>
                        <button className='color-button'></button>
                        <input className='option' placeholder='Añada una opción.'></input>
                    </div>
                    <div>
                        <button className='color-button'></button>
                        <input className='option' placeholder='Añada una opción.'></input>
                    </div>
                </div>
            </div>
            <div className='continue-button-container'>
                <button className='continue-button'>Continuar &gt;</button>
            </div>
        </main>
    )
}

export default Question;