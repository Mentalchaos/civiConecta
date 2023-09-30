import { useState, useEffect, createContext } from 'react';
import {
  getEstablishment,
  createEstablishment,
  updateActiveEstablishment,
} from 'src/services/admin/establishment.request';

const mapEstablishment = (data) => {
  return {
    ...data,
    get statusName() {
      return this.active ? 'activo' : 'inactivo';
    }
  };
};

const useListEstablishment = () => {
  const [fetching, setFetching] = useState(false);
  const [establishments, setEstablishments] = useState([]);

  async function reloadData() {
    setFetching(true);

    const response = await getEstablishment();

    if (response.ok) {
      setEstablishments(response.establishments.map(mapEstablishment));
    }

    setFetching(false);
  }

  useEffect(() => {
    reloadData();
  }, []);

  return {
    states: {
      fetching,
      establishments
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
      async updateStatus(establishmentId, newStatus) {
        const newStatusAsText = newStatus ? 'active' : 'inactive';
        await updateActiveEstablishment(establishmentId, newStatusAsText);
        await reloadData();
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
