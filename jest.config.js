/**
 * @typedef {import('@jest/types').Config.InitialProjectOptions}     JestProjectOptions
 * @typedef {import('@jest/types').Config.InitialOptionsWithRootDir} JestOptions
 */

/**
 * Unit tests
 *
 * @type {JestProjectOptions}
 */
const unitTests = {
    displayName: 'unit',
    testMatch: [
        '<rootDir>/test/**/*.test.ts',
    ],
}

/**
 * Linter
 *
 * @type {JestProjectOptions}
 */
const linting = {
    displayName: 'lint',
    runner: 'jest-runner-eslint',
    testMatch: [
        '<rootDir>/*.{ts,js}',
        '<rootDir>/{script,src,test}/**/*.{ts,js}',
    ],
}

/**
 * @type {JestOptions}
 */
const config = {
    rootDir: '.',
    //preset: 'ts-jest/presets/js-with-ts',
    verbose: true,
    watchPlugins: ['jest-runner-eslint/watch-fix'],
    projects: [unitTests, linting]
}


module.exports = config
