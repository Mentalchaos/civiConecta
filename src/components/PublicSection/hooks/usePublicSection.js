import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import services from 'src/services/admin/publicSection.request';
import http from '../../../services/helpers/http.helper';
const { UserTypes, PlanificationTypes } = config.constants;


const usePublicSection = () => {
  const [showUnits, setShowUnits] = useState(false);
  const [unitStatus,setUnitStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({});
  const [userData, setUserData] = useState({});
  const [isModalShown, setModalVisibility] = useState(false);
  const [unitsContent, setUnitsContent] = useState([]);
  const [planificationType, setPlanificationType] = useState(PlanificationTypes.CUSTOM);
  const [units, setUnits] = useState([]);
  const [unitsPonderation, setUnitsPonderation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const userData = getUserData();

      if (userData.role === UserTypes.ADMIN) {
        alert('No puede ingresar a esta sección como usuario Administrador');
        navigate('/admin');
      }

      setTimeout(() => {
        setModalVisibility(true);
      }, 3000);
    })();
  }, []);

  useEffect(() => {
    async function func() {
      const userData = getUserData();
      const uuid = userData.uuid;

      const [status, info] = await Promise.all([
        services.getFeedbackStatus(uuid).then(r => r.status),
        services.getUserData(uuid).then(r => r.info),
      ]);
      const units = await services.getUnits(info.gradeId).then(r => r.units);
      const unitsOrder = units.map(data => data.id);

      // const eaea = [1,2,1,2, 31];
      const apiCalls = unitsOrder.map(id => http.get(`${config.baseURL}/units/${id}/status/${uuid}`));

      // Actualizar estado de la unidad luego de crearla

      Promise.all(apiCalls)
        .then(results => {
          console.log('results',results);
        })
        .catch(error => {
          console.error(error);
        });

      console.log('apiCalls',apiCalls);


      if (status.student.completed && status.survey.completed && status.teacher.completed) {
        const ponderations = await services.getDataUnitPonderation(uuid).then(r => r.results);
        setUnitsPonderation(ponderations)
      };


      setUnits(units);
      setStatus(status);
      setUserData(info);
      setIsLoading(false);
      setUnitsPonderation([]);
    };

    func();
  }, []);

  return {
    setters: {
      setModalVisibility,
      setPlanificationType,
      setShowUnits,
    },
    states: {
      status,
      units,
      userData,
      isModalShown,
      planificationType,
      unitsContent,
      isLoading,
      unitsPonderation,
      showUnits,
      get isPlanificationEnabled() {
        return !status?.survey?.completed;
      },
      get isSurveyNotGeneratedYet() {
        const { student, teacher } = status ?? {};
        return !teacher.generated && !student.generated;
      },
      get isTeacherSurveyNotCompleted() {
        const { teacher } = status ?? {};
        return !teacher.completed && teacher.generated;
      },
      get isStudentLinkNotGenerated() {
        const { student, teacher } = status ?? {};
        return teacher.completed && !student.generated;
      },
      get isSurveyCompleted() {
        const { student, teacher, survey } = status ?? {};
        return teacher.completed && (student.generated || student.completed) && !survey.completed;
      },
      get shouldModalBeShown() {
        const { student, teacher } = status ?? {};
        return isModalShown && !teacher.completed && !student.completed;
      },
      get isStandardPlanification() {
        return planificationType === PlanificationTypes.STANDARD;
      },
      get isCustomPlanification() {
        return planificationType === PlanificationTypes.CUSTOM;
      },
      get isStudentSurveyGenerated() {
        const { student, teacher } = status;
        return teacher.completed && student.generated;
      }
    },
    actions: {
      navigate,
      teacherSurvey() {
        const userData = getUserData();
        const uuid = userData.uuid;
        return services.getTeacherSurvey(uuid);
      },
      closeModal() {
        setModalVisibility(false);
      },
      setStandardPlanification() {
        setPlanificationType(PlanificationTypes.STANDARD);
      },
      setCustomPlanification() {
        setPlanificationType(PlanificationTypes.CUSTOM);
      },
      handleShowUnits () {
        setShowUnits(true)
      }
    }
  };
};

export default usePublicSection;
