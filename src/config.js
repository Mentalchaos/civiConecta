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

const config = {
  // baseURL: 'http://127.0.0.1:3001',
  baseURL: process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:3001',
  constants,
};

console.log('config', config);

export default config;
