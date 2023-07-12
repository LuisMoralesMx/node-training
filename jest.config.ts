module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src'], 
  silent: false,
  verbose: true,
  collectCoverageFrom: ['src/module-4/**'],
  coverageReporters: ['text'],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
