import { useState, useReducer, useEffect } from 'react';
import * as unitRequest from 'src/services/admin/units.request';
import createServices from 'src/services/admin/event.request';
import { fetchLoading } from 'src/utils/hookUtil';

const classEventService = createServices(1);

const initialState = {
  id: null,
  title: '',
  number: null,
  description: ''
};

const modalState = {
  addClass: false,
  removeClass: false
};

const reduceModals = (state, action) => {
  switch (action.type) {
    case 'MODAL_ADD':
      return {
        ...state,
        addClass: action.payload
      };
  }

  return state;
};

const reduceUnit = (state, action) => {
  switch (action.type) {
    case 'UNIT_LOAD':
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        number: action.payload.number,
        description: action.payload.description
      };
  }

  return state;
};

const useUnitManager = (unitId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modals, modalDispatcher] = useReducer(reduceModals, modalState);
  const [state, dispatcher] = useReducer(reduceUnit, initialState);
  const wrapRequest = fetchLoading(setIsLoading);

  useEffect(() => {
    async function fn() {
      setIsLoading(true);
      const response = await unitRequest.getUnit(unitId);
      dispatcher({ type: 'UNIT_LOAD', payload: response.unit });
      setIsLoading(false);
    }

    fn();
  }, [unitId]);

  const self = {
    states: {
      isLoading,
      title: state.title,
      number: state.number,
      description: state.description,
      modalAddOpened: modals.addClass
    },
    setters: {
      openModalAddClass() {
        modalDispatcher({ type: 'MODAL_ADD', payload: true });
      },
      closeModalAddClass() {
        console.log('trying to close modal');
        modalDispatcher({ type: 'MODAL_ADD', payload: false });
      }
    },
    actions: {
      addClass: wrapRequest(async (payload) => {
        const response = await classEventService.createEvent(payload);

        if (!response.ok) {
          console.error(response.error);
          return Promise.reject();
        }

        self.setters.closeModalAddClass();
      })
    }
  };

  return self;
};

export default useUnitManager;
