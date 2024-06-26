import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from 'src/config';
import { getUserData } from 'src/utils/user';
import services from 'src/services/admin/publicSection.request';
import http from '../../../services/helpers/http.helper';

const { UserTypes, PlanificationTypes } = config.constants;

const usePublicSection = () => {
  const [showUnits, setShowUnits] = useState(false);
  const [unitStatus, setUnitStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({});
  const [userData, setUserData] = useState({});
  const [isModalShown, setModalVisibility] = useState(false);
  const [unitsContent, setUnitsContent] = useState([]);
  const [planificationType, setPlanificationType] = useState(PlanificationTypes.CUSTOM);
  const [units, setUnits] = useState([]);
  const [unitsPonderation, setUnitsPonderation] = useState([]);
  const navigate = useNavigate();
  const [uuid, setUuid] = useState('');
  const [isCustomPlanning, setCustomPlanning] = useState(false);

  const reorderUnits = async () => {
    let nuevoObjeto;
    nuevoObjeto = units.sort((a, b) => a.number - b.number);
    setUnits(nuevoObjeto);
  }

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
      setUuid(uuid);

      const [status, info] = await Promise.all([
        services.getFeedbackStatus(uuid).then(r => r.status),
        services.getUserData(uuid).then(r => r.info),
      ]);
      const units = await services.getUnits(info.gradeId).then(r => r.units);
      const unitsOrder = units.map(data => data.id);
      const apiCalls = unitsOrder.map(id => http.get(`${config.baseURL}/units/${id}/status/${uuid}`));

      Promise.all(apiCalls)
        .then(results => {
          const newArray = results
            .map(data => ({ result: data.result }))
            .map(obj => obj.result);
          setUnitStatus(newArray);
        })
        .catch(error => {
          console.error(error);
        });

      if (status.student.completed && status.survey.completed && status.teacher.completed) {
        const ponderations = await services.getDataUnitPonderation(uuid).then(r => r.results);
        setUnitsPonderation(ponderations);
        setCustomPlanning(true);

      } else {
        setUnitsPonderation([]);
      }

      setUnits(units);
      setStatus(status);
      setUserData(info);
      setIsLoading(false);
    };

    func();
  }, []);

  const updateStatus = (obj, id) => {
    const updatedObj = obj.map(item => {
      if (item.unitId === id) {
        const newStatus = item.status === 2 ? 0 : item.status + 1;
        return { ...item, status: newStatus };
      }
      return item;
    });

    return updatedObj;
  };

  let calculatedUnits = units;

  if (planificationType == 'custom' && unitsPonderation.length) {
    const ponderatedUnits = unitsPonderation.reduce((acc, item) => {
      acc[item.unitId] = item.ponderation;
      return acc;
    }, {});

    const orderedUnits = calculatedUnits.map(unit => {
      const something = { ...unit, ponderation: ponderatedUnits[unit.id] };
      return something;
    });

    orderedUnits.sort((a, b) => b.ponderation - a.ponderation);
    calculatedUnits = orderedUnits;
  }

  if (planificationType == 'custom' && unitStatus.length) {
    const unitStatusMap = unitStatus.reduce((acc, item) => {
      acc[Number.parseInt(item.unitId)] = item.status;
      return acc;
    }, {});

     calculatedUnits = calculatedUnits.map(unit => {
      const something = { ...unit, status: unitStatusMap[unit.id] };
      return something;
    });
  }

  return {
    setters: {
      setModalVisibility,
      setPlanificationType,
      setShowUnits,
    },
    states: {
      status,
      units: calculatedUnits,
      userData,
      isModalShown,
      planificationType,
      unitsContent,
      isLoading,
      unitsPonderation,
      showUnits,
      unitStatus,
      isCustomPlanning,
      get isPlanificationEnabled() {
        return (!status?.student?.completed || !status?.teacher?.completed);
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
      reorderUnits,
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
      handleShowUnits() {
        setShowUnits(true)
      },
      async setNewStatus(id) {
        await setUnitStatus(updateStatus(unitStatus, id));
        return await services.setNewStatus(id, uuid);
      }
    }
  };
};

export default usePublicSection;
