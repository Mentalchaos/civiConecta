import { useEffect, useState } from 'react';
import Welcome from './Welcome';
import PlanificationType from './Planification/PlanificationType';
import PlanificationText from './PlanificationText/PlanificationText';
import LinkGenerator from './LinkGenerator/LinkGenerator';
import UnitsHeader from './Units/UnitsHeader';
import UnitComponent from './Units/UnitComponent';
import UnitSituations from './Units/UnitSituations';
import SurveyModal from './Surveys/SurveyModal';
import cookie from 'src/utils/cookie';
import './PublicSection.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const planningPrograms = [
  {
    program: 'CiviConecta',
  },
  {
    program: 'Ministerial',
  },
];

const planificationData = [
  {
    title: 'Reorganiza la planificación de acuerdo con la realidad de tu curso.',
    textButton: 'Personalizar planificación',
  },
  {
    title: 'Accede a la planificación estandarizada.',
    textButton: 'Ver planificación estandarizada',
  },
  {
    title: 'Genera el enlace para que tus estudiantes respondan la encuesta.',
    textButton: 'Generar enlace',
  },
  {
    title: 'Revisa el progreso de la encuesta de tus estudiantes.',
    textButton: 'Ver progreso',
  },
  {
    title: 'Contesta la encuesta docente.',
    textButton: 'Ir a la encuesta',
  },
];

const mockData = [
  {
    status: 'Completada',
    title: 'Unidad I',
    subtitle: 'Relaciones interpersonales',
    description: 'Fomentar trato respetuoso y solidario; rechazar violencia y discriminación en las relaciones.',
    color: 'unit-green',
    borderColor: 'border-green',
  },
  {
    status: 'En desarrollo',
    title: 'Unidad II',
    subtitle: 'Resolución de conflictos',
    description: 'Aplicar autónomamente estrategias para la resolución de conflictos.',
    color: 'unit-purple',
    borderColor: 'border-purple',
  },
  {
    status: 'Pendiente',
    title: 'Unidad III',
    subtitle: 'Bienestar y autocuidado',
    description:
      'Practicar en forma autónoma conductas protectoras y de autocuidado en relación a su cuerpo e intimidad.',
    color: 'unit-red',
    borderColor: 'border-red',
  },
  {
    status: 'Pendiente',
    title: 'Unidad IV',
    subtitle: 'Autorregulación',
    description: 'Reconocer y describir causas y consecuencias del consumo de drogas.',
    color: 'unit-red',
    borderColor: 'border-red',
  },
];

const emergentSituations = [
  {
    title: 'Situaciones Emergentes',
  },
  {
    title: 'Efemérides',
  },
];

const links = {
  needLink: {
    description: '¿Necesitas el enlace de la encuesta de tus estudiantes nuevamente?',
    textButton: 'Ver enlace encuesta',
    textButtonColor: 'text-purple',
    backgroundColor: 'background-purple',
    width: 'container-width',
    icon: '',
  },
  standardPlanification: {
    description: 'Revisar planificación estandarizada.',
    textButton: 'Ver planificación',
    textButtonColor: 'text-red',
    backgroundColor: 'background-gray',
    width: 'container-width',
    icon: '',
  },
  customPlanification: {
    description: 'Revisar planificación personalizada.',
    textButton: 'Ver planificación',
    textButtonColor: 'text-purple',
    backgroundColor: 'background-red',
    width: 'container-width',
    icon: '',
  },
};

const PublicSection = () => {
  const [isModalShown, setModalVisibility] = useState(false);
  const [planificationType, setPlanificationType] = useState('custom');
  const [wasLinkClicked, setIsLinkClicked] = useState(true);

  const needLinkButton = wasLinkClicked === true && <LinkGenerator data={links.needLink} />;
  const standardPlanificationButton = planificationType === 'custom' && (
    <LinkGenerator data={links.standardPlanification} onClick={() => setPlanificationType('standard')} />
  );
  const customPlanificationButton = planificationType === 'standard' && (
    <LinkGenerator data={links.customPlanification} onClick={() => setPlanificationType('custom')} />
  );

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const dataCookies = cookie.getDataParser();
      if (dataCookies.role === 'Administrator') {
        alert('No puede ingresar a esta sección como usuario Administrador');
        navigate('/admin');
      }
      setTimeout(() => {
        setModalVisibility(true);
      }, 3000);
    })();
  }, []);

  const closeModal = () => setModalVisibility(false);
  const modal = isModalShown && <SurveyModal closeModal={closeModal} />;

  return (
    <div className="public-section-container">
      {modal}
      <Welcome />
      <PlanificationText />
      <div className="planification-cont">
        {planificationData.map((data, key) => (
          <PlanificationType key={key} title={data.title} textButton={data.textButton} />
        ))}
      </div>
      <div className="units-cont">
        <UnitsHeader program={planningPrograms[1].program} />
        <div className="units-components">
          {mockData.map((data, key) => (
            <UnitComponent
              key={key}
              status={data.status}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              color={data.color}
              borderColor={data.borderColor}
            />
          ))}
          <div className="units-components-two">
            {emergentSituations.map((data, key) => (
              <UnitSituations key={key} title={data.title} />
            ))}
          </div>
        </div>
      </div>
      {needLinkButton}
      {standardPlanificationButton}
      {customPlanificationButton}
      <Footer />
    </div>
  );
};

PublicSection.displayName = 'PublicSection';

export default PublicSection;
