module.exports = {
  preset: 'ts-jest',
  transform: {
    '.ts': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
};
