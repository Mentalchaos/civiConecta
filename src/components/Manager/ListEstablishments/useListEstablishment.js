import { useState, useEffect, createContext } from 'react';
import {
  getEstablishment,
  createEstablishment,
  updateActiveEstablishment,
} from 'src/services/admin/establishment.request';

const useListEstablishment = () => {
  const [fetching, setFetching] = useState(false);
  const [establishments, setEstablishments] = useState([]);
  const [dataDisplayed, setDataDisplayed] = useState([]);
  const [selectedEstablishment, setSelectedEstablishment] = useState(null);

  async function reloadData() {
    setFetching(true);

    const response = await getEstablishment();

    if (response.ok) {
      const dataDisplayed = response.establishments.map(est => {
        const { active, name } = est;
        return {
          name,
          active: active ? 'Activo' : 'Inactivo'
        };
      });
      setEstablishments(response.establishments);
      setDataDisplayed(dataDisplayed);
    }

    setFetching(false);
  }

  useEffect(() => {
    reloadData();
  }, []);

  return {
    states: {
      fetching,
      establishments,
      dataDisplayed,
      selectedEstablishment
    },
    actions: {
      async createEstablishment(establishmentName) {
        const pk = establishments.length + 1;
        const response = await createEstablishment(pk, establishmentName);

        if (response.ok) {
          await reloadData();
        } else {
          console.error(response.error);
        }
      },
      selectEstablishment(row) {
        if (!row) {
          setSelectedEstablishment(null);
          return;
        }

        const establishment = establishments.find(e => e.id === row.id);
        setSelectedEstablishment(establishment);
      }
    },
    setters: {}
  };
};

const ListContext = createContext({});

export {
  ListContext,
  useListEstablishment
};
