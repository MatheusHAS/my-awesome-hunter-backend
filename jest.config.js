module.exports = {
  bail: true,
  clearMocks: true,

  // collectCoverage: false,

  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],
  testTimeout: 60000,

  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts'],
}
