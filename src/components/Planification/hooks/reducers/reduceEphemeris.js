const initialState = {
  files: [],
  lesson: {},
  description: '',
  selectedDocument: {},
  date: '',
  name: '',
  filepath: '',
  planning: {
    topic: '',
    studentMaterials: '',
    teacherMaterials: '',
    startActivity: '',
    mainActivity: '',
    endActivity: '',
    objective: ''
  }
};

const reduceEphemeris = (state, action) => {
  const updateField = (fieldName) => () => {
    return {
      ...state,
      [fieldName]: action.payload
    };
  };

  const updatePlanningField = (fieldName) => () => {
    return {
      ...state,
      planning: {
        ...state.planning,
        [fieldName]: action.payload
      }
    }
  };

  const actions = {
    INITIAL_DATA: () => {
      const lesson = action.payload.lesson;
      const planning = lesson.planning;

      return {
        ...state,
        files: lesson.files,
        description: lesson.description,
        lesson: lesson,
        date: lesson.ephemeris.date,
        planning: {
          ...state.planning,
          topic: planning.topic,
          startActivity: planning.startActivity,
          mainActivity: planning.mainActivity,
          endActivity: planning.endActivity,
          objective: lesson.objective,
          studentMaterials: planning.materials.student.join(','),
          teacherMaterials: planning.materials.teacher.join(',')
        }
      };
    },
    DELETE_FILE: () => {
      return {
        ...state,
        files: state.files.filter(f => f.uuid !== action.payload.uuid),
        selectedDocument: {}
      };
    },
    ADD_FILE: () => {
      return {
        ...state,
        files: [...state.files, action.payload]
      };
    },
    SET_TOPIC: updatePlanningField('topic'),
    SET_STUDENT_MATERIALS: updatePlanningField('studentMaterials'),
    SET_TEACHER_MATERIALS: updatePlanningField('teacherMaterials'),
    SET_START_ACTIVITY: updatePlanningField('startActivity'),
    SET_MAIN_ACTIVITY: updatePlanningField('mainActivity'),
    SET_END_ACTIVITY: updatePlanningField('endActivity'),
    SET_DESCRIPTION: updateField('description'),
    SET_OBJECTIVE: updatePlanningField('objective'),
    SET_DATE: updateField('date'),
    SET_SELECTED_DOCUMENT: updateField('selectedDocument'),
    SET_NAME: updateField('name'),
    SET_FILEPATH: updateField('filepath')
  };

  if (actions[action.type]) {
    return actions[action.type]();
  }

  return state;
};


export { reduceEphemeris, initialState };
