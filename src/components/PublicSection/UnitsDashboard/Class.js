import './Class.css';
import arrow from '../../../assets/Icons/arrow-degree-green.svg'

const Class = () => {
    return (
        <div className="classes">
           <div className='class'>
                <div className='class-title'>Clase N*1</div>
                <div className='sub-title'>Resolución de conflictos con los amigos</div>
                <div className='class-text'>Comprender la amistad de manera sana (no posesiva) y empática para lograr relaciones de confianza y duraderas.</div>
                <div className='see-class-container'>
                    <button className='see-class'>
                        Ver clase
                        <img className='arrow' src={arrow} alt='' />
                    </button>
                </div>
           </div>
           <div className='class'>
           <div className='class-title'>Clase N*2</div>
                <div className='sub-title'>Resolución de conflictos con los amigos</div>
                <div className='class-text'>Comprender la amistad de manera sana (no posesiva) y empática para lograr relaciones de confianza y duraderas.</div>
                <div className='see-class-container'>
                    <button className='see-class'>
                        Ver clase
                        <img className='arrow' src={arrow} alt='' />
                    </button>
                </div>
           </div>
           <div className='class'>
           <div className='class-title'>Clase N*3</div>
                <div className='sub-title'>Resolución de conflictos con los amigos</div>
                <div className='class-text'>Comprender la amistad de manera sana (no posesiva) y empática para lograr relaciones de confianza y duraderas.</div>
                <div className='see-class-container'>
                    <button className='see-class'>
                        Ver clase
                        <img className='arrow' src={arrow} alt='' />
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Class;