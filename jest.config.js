module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    '!src/**/__tests__/*.test.{js,jsx}',
    '!src/pages/**'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    __PATH_PREFIX__: ``
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `cypress`],
  testURL: `http://localhost`,
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`]
}
