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
    CLASS: 1,
    SITUATION: 2,
    EPHEMERIS: 3,
  },
};

const config = {
  // baseURL: 'http://127.0.0.1:3001',
  baseURL: process.env.REACT_APP_BASE_URL || 'https://civi-server-dev.adaptable.app',
  constants,
};

export default config;
