import { useEffect, useState, createContext } from 'react';

const useEditEstablishment = (establishmentId) => {
  useEffect(() => {
    console.log('trayendo info desde ' ,establishmentId);
  }, [establishmentId]);

  return {
    states: {},
    actions: {}
  };
};

const EditEstablishmentContext = createContext({});

export { useEditEstablishment, EditEstablishmentContext };
