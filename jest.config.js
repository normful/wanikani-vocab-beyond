module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/__tests__/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  testURL: 'http://localhost',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
