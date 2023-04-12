import { useEffect, useState } from 'react';
import config from 'src/config';
import {
  createEstablishment,
  getEstablishment,
  getEstablishmentById,
  updateActiveEstablishment,
} from 'src/services/admin/establishment.request';
import { fetchLoading } from 'src/utils/hookUtil';

const { ManagerStage } = config.constants;

const useManager = () => {
  const [stage, setStage] = useState(ManagerStage.MANAGER); // Default type "manager"
  const [establishmentSelected, setEstablishmentSelected] = useState({});
  const [isEstablishmentSelected, setIsEstablishmentSelected] = useState(false);
  const [establishmentList, setEstablishmentList] = useState([]);
  const [showModalConfirmActive, setShowModalConfirmActive] = useState(false);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const wrapRequest = fetchLoading(setIsFetching);

  useEffect(() => {
    getAllEstablishment();
  }, []);

  const getAllEstablishment = () => {
    wrapRequest(async () => {
      const response = await getEstablishment();
      setEstablishmentList(response.establishments);
    })();
  };

  return {
    states: {
      stage,
      error,
      establishmentList,
      establishmentSelected,
      isFetching,
      showModalConfirmActive,
      isEstablishmentSelected,
      get headerSubtitle() {
        const titleToCurrentStage = {
          1: 'Manager de establecimientos',
          2: establishmentSelected?.name,
          3: establishmentSelected?.name,
        };
        return titleToCurrentStage[stage];
      },
    },
    setters: {
      setStage,
      setEstablishmentSelected,
      setIsEstablishmentSelected,
      setShowModalConfirmActive,
      setError,
    },
    actions: {
      updateActiveEstablishment: wrapRequest(async () => {
        const isActive = isEstablishmentSelected.active;
        const response = await updateActiveEstablishment(
          isEstablishmentSelected.id,
          isActive,
        );
        if (!response.ok) {
          setError(response.error);
          return;
        }
        setShowModalConfirmActive(false);
      }),
      createEstablishment: wrapRequest(async establishmentName => {
        const response = await createEstablishment(establishmentName);
        if (!response.ok) {
          setError(response.error);
          return;
        }
        setEstablishmentList([...establishmentList, response.establishment]);
      }),
      getEstablishmentById: wrapRequest(async establishmentId => {
        const response = await getEstablishmentById(establishmentId);
        console.log(response);
      }),
    },
  };
};

export default useManager;
