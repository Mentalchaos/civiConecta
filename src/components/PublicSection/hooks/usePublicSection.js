import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
const { UserTypes, PlanificationTypes } = config.constants;

const services = {
  async getFeedbackStatus(uuid) {
    const response = await fetch(`${config.baseURL}/feedback/status/${uuid}`);
    return response.json();
  },
  async getUserData(uuid) {
    const response = await fetch(`${config.baseURL}/establishments/info/${uuid}`, {
      headers: {
        token: JSON.parse(sessionStorage.getItem('user')).token
      }
    });

    return response.json();
  },
  getTeacherSurvey(uuid) {
    return fetch(`${config.baseURL}/feedback/teacher/${uuid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  }
};

const usePublicSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({});
  const [userData, setUserData] = useState({});
  const [isModalShown, setModalVisibility] = useState(false);
  const [unitsContent, setUnitsContent] = useState([]);
  const [planificationType, setPlanificationType] = useState(PlanificationTypes.CUSTOM);
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
        services.getUserData(uuid).then(r => r.info)
      ]);

      setStatus(status);
      setUserData(info);
      setIsLoading(false);
    }

    func();
  }, []);

  return {
    setters: {
      setModalVisibility,
      setPlanificationType,
    },
    states: {
      status,
      userData,
      isModalShown,
      planificationType,
      unitsContent,
      isLoading,
      get isPlanificationEnabled() {
        const { student, teacher } = status ?? {};
        return status && (!student.completed || !teacher.completed);
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
        const { student, teacher } = status ?? {};
        return teacher.completed && student.generated;
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
      }
    }
  };
};

export default usePublicSection;
