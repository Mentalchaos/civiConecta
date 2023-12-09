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
import PlanificationTypeMobile from './Planification/PlanificationTypeMobile';

const Plan = () => {
  const { states, actions, setters } = useContext(PublicContext);

  const surveyNotGenerated = {
    textButton: "Personalizar planificación",
    title: "Reorganiza la planificación de acuerdo con la realidad de tu curso.",
    img: planificationCustom,
    onClick: () => setters.setModalVisibility(true)
  }

  const teacherIncomplete = {
    textButton: 'Ir a la encuesta',
    title: 'Contesta la encuesta docente.',
    onClick: () => actions.navigate('/public/professor-survey'),
    img: planificationSurvey
  }

  const linkNotGenerated = {
    textButton: 'Generar enlace',
    colorTextBtn: "purple2",
    colorIconRight: 'color-icon-purple',
    onClick: () => actions.navigate('/public/share-survey'),
    title: 'Genera el enlace para que tus estudiantes respondan la encuesta.',
    img: planificationGenerateLink
  }

  const studentSurveyGenerated = {
    textButton: 'Ver progreso',
    colorTextBtn: "purple2",
    onClick: () => actions.navigate('/public/professor-profile'),
    colorIconRight: 'color-icon-purple',
    title: 'Revisa el progreso de la encuesta de tus estudiantes.',
    img: planificationProgress
  }

  const standardizedPlanning = {
    textButton: "Ver planificación estandarizada",
    colorTextBtn: "black",
    colorIconRight: "color-icon-black",
    title: "Accede a la planificación estandarizada.",
    img: planificationStandarized,
    onClick: () => actions.handleShowUnits()
  }

  return (

    <div className="planification-cont">

      <PlanificationText />
      <Visible condition={states.isSurveyNotGeneratedYet}>
        {
          window.screen.width < 1024 ?
          <PlanificationTypeMobile 
            planificationProps={surveyNotGenerated}
          /> :
          <PlanificationType
            planificationProps={surveyNotGenerated}
          />
        }
      </Visible>

      <Visible condition={states.isTeacherSurveyNotCompleted}>
        {
          window.screen.width < 1024 ?
            <PlanificationTypeMobile
              planificationProps={teacherIncomplete}
            /> :
            <PlanificationType
              planificationProps={teacherIncomplete}
            />

        }
      </Visible>

      <Visible condition={states.isStudentLinkNotGenerated}>
        {
          window.screen.width < 1024 ?
            <PlanificationTypeMobile
              planificationProps={linkNotGenerated}
            /> :
            <PlanificationType
              planificationProps={teacherIncomplete}
            />
        }
      </Visible>

      <Visible condition={states.isStudentSurveyGenerated}>
        {
          window.screen.width < 1024 ?
            <PlanificationTypeMobile
              planificationProps={studentSurveyGenerated}
            /> :
            <PlanificationType
              planificationProps={studentSurveyGenerated}
            />
        }
      </Visible>

      {
        window.screen.width < 1024 ? 
        <PlanificationTypeMobile
          planificationProps={standardizedPlanning}
        /> :
        <PlanificationType
          planificationProps={standardizedPlanning}
        />
      }
    </div>
  );
};

export default Plan;
