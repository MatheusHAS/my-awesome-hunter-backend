module.exports = {
  bail: true,
  clearMocks: true,

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['/node_modules/', 'index.ts'],
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
