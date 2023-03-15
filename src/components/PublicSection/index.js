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
import { getUserData } from 'src/utils/user';
import planificationCustom from 'src/assets/images/planification-custom.png';
import planificationGenerateLink from 'src/assets/images/planification-generate-link.png';
import planificationProgress from 'src/assets/images/planification-progress.png';
import planificationStandarized from 'src/assets/images/planification-standarized.png';
import planificationSurvey from 'src/assets/images/planification-survey.png';

const { links, emergentSituations, planningPrograms } = config.contents;
const { PlanificationTypes, UserTypes } = config.constants;

const PublicSection = () => {
  const [unitsContent, setUnitsContent] = useState([]);
  const [isModalShown, setModalVisibility] = useState(false);
  const [planificationType, setPlanificationType] = useState(PlanificationTypes.CUSTOM);
  const [wasLinkClicked, setIsLinkClicked] = useState(true);
  const [status, setStatus] = useState();
  const [userData, setUserData] = useState();

  const { student, teacher } = status || {};

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
    const userData = getUserData();
    const uuid = userData.uuid;

    fetch(`${config.baseURL}/feedback/status/${uuid}`)
      .then(d => d.json())
      .then(data => setStatus(data.status))
  }, []);

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

  const teacherSurvey = () => {
    const userData = getUserData();
    const uuid = userData.uuid;

    fetch(`${config.baseURL}/feedback/teacher/${uuid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

  useEffect(() => {
    const userData = getUserData();
    const uuid = userData.uuid;

    fetch(`${config.baseURL}/establishments/info/${uuid}`, {
      headers: {
        token: JSON.parse(localStorage.getItem('user')).token
      }
    })
      .then(d => d.json())
      .then(data => setUserData(data.info))
  }, [])

  const closeModal = () => setModalVisibility(false);
  const modal = (isModalShown && !teacher.completed && !student.completed) && <SurveyModal statusData={status} closeModal={closeModal} teacherSurveyOnclick={teacherSurvey}/>;

  return (
    <div className="public-section-container">
      {modal}
      <Welcome userData={userData} />

      { status && (!student.completed || !teacher.completed) && <PlanificationText /> }
      { status && (!student.completed || !teacher.completed) && <div className="planification-cont">

      { !teacher.generated && !student.generated && <PlanificationType
            textButton={'Personalizar planificación'}
            title={'Reorganiza la planificación de acuerdo con la realidad de tu curso.'}
            img={planificationCustom}
            onClick={() => setModalVisibility(true)}
          />
      }
        { (!teacher.completed && teacher.generated) &&
          <PlanificationType
            textButton={'Ir a la encuesta'}
            title={'Contesta la encuesta docente.'}
            onClick={() => navigate('/public/professor-survey')}
            img={planificationSurvey}
          />
        }
        { (teacher.completed && !student.generated) &&
          <PlanificationType
            textButton={'Generar enlace'}
            colorTextBtn={"purple"}
            colorIconRight={'color-icon-purple'}
            title={'Genera el enlace para que tus estudiantes respondan la encuesta.'}
            img={planificationGenerateLink}
          />
        }
        { (teacher.completed && student.generated) &&
          <PlanificationType
            textButton={'Ver progreso'}
            colorTextBtn={"purple"}
            colorIconRight={'color-icon-purple'}
            title={'Revisa el progreso de la encuesta de tus estudiantes.'}
            img={planificationProgress}
          />
        }
        <PlanificationType
            textButton={'Ver planificación estandarizada'}
            colorTextBtn={"black"}
            colorIconRight={'color-icon-black'}
            title={'Accede a la planificación estandarizada.'}
            img={planificationStandarized}
          />
      </div>
      }
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
