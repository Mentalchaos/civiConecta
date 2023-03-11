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
import config from 'src/config';
import './PublicSection.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { getUnits } from 'src/services/public/unit.request';
import planificationCustom from 'src/assets/images/planification-custom.png';
import planificationGenerateLink from 'src/assets/images/planification-generate-link.png';
import planificationProgress from 'src/assets/images/planification-progress.png';
import planificationStandarized from 'src/assets/images/planification-standarized.png';
import planificationSurvey from 'src/assets/images/planification-survey.png';

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

const { PlanificationTypes, UserTypes } = config.constants;


const PublicSection = () => {
  const [unitsContent, setUnitsContent] = useState([]);
  const [isModalShown, setModalVisibility] = useState(false);
  const [planificationType, setPlanificationType] = useState(PlanificationTypes.CUSTOM);
  const [wasLinkClicked, setIsLinkClicked] = useState(true);
  const [status, setStatus] = useState();

  const needLinkButton = wasLinkClicked === true && <LinkGenerator data={links.needLink} />;
  const standardPlanificationButton = planificationType === PlanificationTypes.CUSTOM && (
    <LinkGenerator
      data={links.standardPlanification}
      onClick={() => setPlanificationType(PlanificationTypes.STANDARD)}
    />
  );
  const customPlanificationButton = planificationType === PlanificationTypes.STANDARD && (
    <LinkGenerator
      data={links.customPlanification}
      onClick={() => setPlanificationType(PlanificationTypes.CUSTOM)}
    />
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function getUnitsFromDashboard() {
      const results = await getUnits();
      setUnitsContent(results);
    }
  }, []);

  useEffect(() => {
    fetch(`${config.baseURL}/feedback/status/455fd91d-15ac-48b6-8b2a-e75d7891bbab`)
    .then(d => d.json())
    .then(data => setStatus(data))
  }, []);

  console.log('status',status);

  useEffect(() => {
    (async () => {
      const dataCookies = cookie.getDataParser();

      if (dataCookies.role ===  UserTypes.ADMIN) {
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
          <PlanificationType
            textButton={'Personalizar planificación'}
            title={'Reorganiza la planificación de acuerdo con la realidad de tu curso.'}
            img={planificationCustom}

          />
          <PlanificationType
            textButton={'Ver planificación estandarizada'}
            colorTextBtn={"black"}
            colorIconRight={'color-icon-black'}
            title={'Accede a la planificación estandarizada.'}
            img={planificationStandarized}
          />
          <PlanificationType
            textButton={'Generar enlace'}
            colorTextBtn={"purple"}
            colorIconRight={'color-icon-purple'}
            title={'Genera el enlace para que tus estudiantes respondan la encuesta.'}
            img={planificationGenerateLink}
          />
          <PlanificationType
            textButton={'Ver progreso'}
            colorTextBtn={"purple"}
            colorIconRight={'color-icon-purple'}
            title={'Revisa el progreso de la encuesta de tus estudiantes.'}
            img={planificationProgress}
          />
          <PlanificationType
            textButton={'Ir a la encuesta'}
            title={'Contesta la encuesta docente.'}
            img={planificationSurvey}
          />

      </div>
      <div className="units-cont">
        <UnitsHeader program={planningPrograms[1].program} />
        <div className="units-components">
          {unitsContent.map((data, key) => (
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
