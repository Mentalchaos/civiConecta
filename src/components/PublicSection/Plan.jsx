import { useContext } from 'react';
import Visible from 'src/components/UI/Visible';
import PlanificationText from './PlanificationText/PlanificationText';
import PlanificationType from './Planification/PlanificationType';
import { PublicContext } from './context';
import planificationCustom from 'src/assets/images/planification-custom.png';
import planificationSurvey from 'src/assets/images/planification-survey.png';
import planificationGenerateLink from 'src/assets/images/planification-generate-link.png';
import planificationProgress from 'src/assets/images/planification-progress.png';
import planificationStandarized from 'src/assets/images/planification-standarized.png';

const Plan = () => {
  const { states, actions, setters } = useContext(PublicContext);

  return (

    <div className="planification-cont">

      <PlanificationText />
      <Visible condition={states.isSurveyNotGeneratedYet}>
        <PlanificationType
          textButton="Personalizar planificación"
          title="Reorganiza la planificación de acuerdo con la realidad de tu curso."
          img={planificationCustom}
          onClick={() => setters.setModalVisibility(true)}
        />
      </Visible>

      <Visible condition={states.isTeacherSurveyNotCompleted}>
        <PlanificationType
          textButton="Ir a la encuesta"
          title="Contesta la encuesta docente."
          onClick={() => actions.navigate('/public/professor-survey')}
          img={planificationSurvey}
        />
      </Visible>

      <Visible condition={states.isStudentLinkNotGenerated}>
        <PlanificationType
          textButton={'Generar enlace'}
          colorTextBtn={"purple"}
          colorIconRight={'color-icon-purple'}
          onClick={() => actions.navigate('/public/share-survey')}
          title={'Genera el enlace para que tus estudiantes respondan la encuesta.'}
          img={planificationGenerateLink}
        />
      </Visible>

      <Visible condition={states.isStudentSurveyGenerated}>
        <PlanificationType
          textButton={'Ver progreso'}
          colorTextBtn={"purple"}
          colorIconRight={'color-icon-purple'}
          title={'Revisa el progreso de la encuesta de tus estudiantes.'}
          img={planificationProgress}
        />
      </Visible>

      <PlanificationType
        textButton="Ver planificación estandarizada"
        colorTextBtn="black"
        colorIconRight="color-icon-black"
        title="Accede a la planificación estandarizada."
        img={planificationStandarized}
      />

    </div>
  );
};

export default Plan;
