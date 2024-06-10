import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
createJestConfig(customJestConfig)().then((config) =>
  console.log(JSON.stringify(config, null, 2))
);

export default createJestConfig(customJestConfig);
