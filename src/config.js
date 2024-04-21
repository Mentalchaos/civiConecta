const constants = {
  PlanificationTypes: {
    STANDARD: 'standard',
    CUSTOM: 'custom',
  },
  UserTypes: {
    ADMIN: 'Administrator',
    USER: 'User',
  },
  EventTypes: {
    SITUATION: 1,
    EPHEMERIS: 2,
  },
};

const links = {
  needLink: {
    description: '¿Necesitas el enlace de la encuesta de tus estudiantes nuevamente?',
    textButton: 'Ver enlace encuesta',
    textButtonColor: 'text-purple',
    backgroundColor: 'background-purple',
    width: 'container-width',
    icon: '',
  },
  needLinkAgain: {
    description: '¿Llegó un estudiante nuevo y necesita responder la encuesta?',
    textButton: 'Ver enlace encuesta',
    textButtonColor: 'text-purple',
    backgroundColor: 'background-purple',
    width: 'container-width',
    icon: '',
  },
  standardPlanification: {
    description: 'Revisar planificación estandarizada.',
    textButton: 'Ver planificación',
    textButtonColor: 'text-red',
    backgroundColor: 'background-gray',
    width: 'container-width',
    icon: '',
  },
  customPlanification: {
    description: 'Revisar planificación personalizada.',
    textButton: 'Ver planificación',
    textButtonColor: 'text-purple',
    backgroundColor: 'background-red',
    width: 'container-width',
    icon: '',
  },
};

const emergentSituations = [
  { title: 'Situaciones Emergentes' },
  { title: 'Efemérides' },
];

const planningPrograms = [
  { program: 'CiviConecta' },
  { program: 'Ministerial' }
];

const config = {
  // baseURL: 'http://127.0.0.1:3001',
  // baseURL: 'http://errcake.ngrok.io',
  //admin base url => https://civi-postgres.adaptable.app
  baseURL: process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:3001',
  constants,
  contents: {
    links,
    emergentSituations,
    planningPrograms
  }
};

export default config;
