import { useState, useReducer, useEffect } from 'react';
import * as unitRequest from 'src/services/admin/units.request';
import * as lessonRequest from 'src/services/admin/lesson.request';
import { fetchLoading } from 'src/utils/hookUtil';

const initialState = {
  id: null,
  title: '',
  number: null,
  description: '',
  lessons: []
};

const modalState = {
  addLesson: false
};

const reduceModals = (state, action) => {
  switch (action.type) {
    case 'MODAL_ADD':
      return {
        ...state,
        addLesson: action.payload
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
        description: action.payload.description,
        lessons: action.payload.lessons
      };
    case 'UNIT_DELETE_LESSON':
      return {
        ...state,
        lessons: state.lessons.filter(c => c.id !== action.payload)
      };
    case 'UNIT_ADD_LESSON':
      return {
        ...state,
        lessons: [...state.lessons, action.payload]
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
      modalAddOpened: modals.addLesson,
      unit: {
        id: state.id,
        title: state.title,
        number: state.number,
        description: state.description,
        lessons: state.lessons
      }
    },
    setters: {
      openModalAddLesson() {
        modalDispatcher({ type: 'MODAL_ADD', payload: true });
      },
      closeModalAddLesson() {
        modalDispatcher({ type: 'MODAL_ADD', payload: false });
      }
    },
    actions: {
      addLesson: wrapRequest(async (payload) => {
        const response = await lessonRequest.createLesson(payload);

        if (!response.ok) {
          console.error(response.error);
          return Promise.reject();
        }

        dispatcher({ type: 'UNIT_ADD_LESSON', payload: response.lesson });
        self.setters.closeModalAddLesson();
      }),
      deleteLesson: wrapRequest(async (lessonId) => {
        dispatcher({ type: 'UNIT_DELETE_LESSON', payload: lessonId });
        await lessonRequest.deleteLesson(lessonId);
      })
    }
  };

  return self;
};

export default useUnitManager;
