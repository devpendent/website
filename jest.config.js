module.exports = {
  collectCoverageFrom: ['src/components/**/*.{js,jsx}', '!src/**/__tests__/*.{js,jsx}', '!src/pages/**'],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10
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
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  testURL: `http://localhost`,
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`]
}
