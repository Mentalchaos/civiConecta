import './buttonOptions.css'

const ButtonOptions = () => {
    return (
        <div className="options">
           <div className='options-buttons'>
                <a className='options-button options-button-left' href=''>Situaciones emergentes</a>
                <a className='options-button options-button-right' href=''>Efemérides</a>
           </div>
        </div>
    )
}

export default ButtonOptions;