module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "identity-obj-proxy",
    '\\.(css|scss)$': '<rootDir>/.jest/identity-obj-proxy-esm.js',
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "tsx",
    "scss"
  ],
};