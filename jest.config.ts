export default {
  clearMocks: true,
  transform: {
    "^.+\\.ts$": ["@swc/jest"],
  },
  collectCoverageFrom: ["<rootDir>/src/**.*ts"],
  coverageProvider: "v8",
};
