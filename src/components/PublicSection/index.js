import PublicFooter from './Footer/PublicFooter';
import PublicHeader from './Header/PublicHeader';
import Welcome from './Welcome/Welcome';
import PlanificationType from './Planification/PlanificationType';
import PlanificationText from './PlanificationText/PlanificationText';
import SurveyLink from './SurveyLink/SurveyLink';
import UnitsHeader from './Units/UnitsHeader';
import UnitComponent from './Units/UnitComponent';
import UnitSituations from './Units/UnitSituations';
import './PublicSection.css';

const planificationData = [
    {
        title: 'Reorganiza la planificación de acuerdo con la realidad de tu curso.',
        textButton: 'Personalizar planificación'
    },
    {
        title: 'Accede a la planificación estandarizada.',
        textButton: 'Ver planificación estandarizada'
    },
    {
        title: 'Genera el enlace para que tus estudiantes respondan la encuesta.',
        textButton: 'Generar enlace'
    },
    {
        title: 'Revisa el progreso de la encuesta de tus estudiantes.',
        textButton: 'Ver progreso'
    },
    {
        title: 'Contesta la encuesta docente.',
        textButton: 'Ir a la encuesta'
    }
]

const mockData = [
    {
        status: 'Completada',
        title: 'Unidad I',
        subtitle: 'Relaciones interpersonales',
        description: 'Fomentar trato respetuoso y solidario; rechazar violencia y discriminación en las relaciones.',
        color: 'unit-green',
        borderColor: 'border-green'
    },
    {
        status: 'En desarrollo',
        title: 'Unidad II',
        subtitle: 'Resolución de conflictos',
        description: 'Aplicar autónomamente estrategias para la resolución de conflictos.',
        color: 'unit-purple',
        borderColor: 'border-purple'
    },
    {
        status: 'Pendiente',
        title: 'Unidad III',
        subtitle: 'Bienestar y autocuidado',
        description: 'Practicar en forma autónoma conductas protectoras y de autocuidado en relación a su cuerpo e intimidad.',
        color: 'unit-red',
        borderColor: 'border-red'
    },
    {
        status: 'Pendiente',
        title: 'Unidad IV',
        subtitle: 'Autorregulación',
        description: 'Reconocer y describir causas y consecuencias del consumo de drogas.',
        color: 'unit-red',
        borderColor: 'border-red'
    }
]

const emergentSituations = [
    {
        title: 'Situaciones Emergentes'
    },
    {
        title: 'Efemérides'
    }

]

const PublicSection = () => {
    return (
        <div>
            <PublicHeader />
            <Welcome />
            <PlanificationText />
            <div className='planification-cont'>
                {
                    planificationData.map((data, key) => 
                        <PlanificationType
                            title={data.title}
                            textButton={data.textButton}
                        />
                    )
                }
            </div>
            <div className='units-cont'>
                <UnitsHeader />
                <div className='units-components'>
                    {
                        mockData.map((data, key) =>
                            <UnitComponent
                                key={key}
                                status={data.status}
                                title={data.title}
                                subtitle={data.subtitle}
                                description={data.description}
                                color={data.color}
                                borderColor={data.borderColor}
                            />
                        )
                    }
                    <div className='units-components-two'>
                        {
                            emergentSituations.map((data, key) =>
                                <UnitSituations 
                                    title={data.title}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <SurveyLink />
            <PublicFooter />
        </div>
    )
}

export default PublicSection;