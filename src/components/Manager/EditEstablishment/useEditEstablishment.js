import { useEffect, useState } from 'react';

const useEditEstablishment = (establishmentId) => {
  useEffect(() => {
    console.log('trayendo info desde ' ,establishmentId);
  }, [establishmentId]);

  return {
    states: {},
    actions: {}
  };
};

export default useEditEstablishment;
