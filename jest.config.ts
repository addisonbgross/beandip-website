import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  reporters: [
    [
      'jest-junit',
      {
        outputDirectory: './',
        outputName: 'report.xml',
        addFileAttribute: 'true',
      },
    ],
  ],
};

export default createJestConfig(config);
