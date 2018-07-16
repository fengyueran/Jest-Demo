module.exports = {
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$", // 匹配需要测试的文件
  testPathIgnorePatterns: ['/bin/', '/build/', '/dist/', '/lib/', '/node_modules/'],
  setupFiles: [
    "<rootDir>/config/jest/setupTests.js", // set up the testing environment before each test
  ],
  moduleNameMapper: { 
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js", //mock处理的资源， 不mock资源会无法加载而报错
  },
  collectCoverageFrom: ["src/*.{js,jsx}", "!**/node_modules/**"], // 指定覆盖范围
};