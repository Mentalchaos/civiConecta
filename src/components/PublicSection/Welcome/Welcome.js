import './Welcome.css';

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <div className='left-container'>
                <h3>¡Bienvenida Catalina!</h3>
                <p className='p-1'>
                Ya eres parte de la Civicomunidad, aquí encontrarás todos los recursos que necesitas para
                tus clases de Orientación. Esperamos contribuir en tu labor como docente a cargo de un
                curso. No dudes en contactarnos si nos necesitas.
                </p>
                <p className='p-2'>
                Te recomendamos revisar previamente el material y ajustar lo que consideres pertinente,
                pues nuestro programa aborda temas que pueden resultar complejos según el contexto
                de tus estudiantes.
                </p>
            </div>
            <div className='right-container'>
                <div>
                    <img/>
                    <p>Miércoles 13, Julio 2022</p>
                </div>
                <div>
                    <img/>
                    <div>
                        <p>Establecimiento o Institución educativa</p>
                        <p>Liceo Amanda Labarca</p>
                    </div>
                </div>
                <div>
                    <img/>
                    <div>
                        <p>Nivel del curso</p>
                        <p>Jefatura 5º</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;