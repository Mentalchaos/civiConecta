const constants = {
  PlanificationTypes: {
    STANDARD: 'standard',
    CUSTOM: 'custom'
  },
  UserTypes: {
    ADMIN: 'Administrator',
    USER: 'User'
  },
  EventTypes: {
    CLASS: 1,
    SITUATION: 2,
    EPHEMERIS: 3
  }
};

const config = {
  // baseURL: process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:3001',
  baseURL: 'https://civi-server-dev.adaptable.app',
  constants
};

console.log('config', config.baseURL);

export default config;
