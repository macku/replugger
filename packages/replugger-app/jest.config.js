module.exports = {
  roots: ['./src'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    ajs: '<rootDir>/src/mocks/ajs.js'
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$',
  coverageDirectory: '<rootDir>/coverage',
  verbose: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
};
