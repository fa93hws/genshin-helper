module.exports = {
  testMatch: ['**/tests/**/*.tests.ts{,x}'],
  collectCoverageFrom: [
    'src/**/*.ts{,x}',
    'tools/**/*.ts',
    'config/**/*.ts',
    '!**/fixtures/**',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
  moduleNameMapper: {},
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.tsnode.json',
      isolatedModules: true,
    },
  },
  preset: 'ts-jest',
};
