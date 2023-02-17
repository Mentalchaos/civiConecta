const constants = {
  PlaninicationTypes: {
    STANDARD: 'standard',
    CUSTOM: 'custom'
  },
  UserTypes: {
    ADMIN: 'Administrator',
    USER: 'User'
  }
};

const config = {
  baseURL: process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:3001',
  constants
};

export default config;
