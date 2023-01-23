const chalk = require("chalk");

const { setupTeardown } = require("./setup-teardown");

const { beforeAlls, beforeEachs, afterAlls, afterEachs } = setupTeardown;

const total = {
    tests: 0,
    passedTests: 0,
    failedTests: 0,
};

exports.describe = function (testGroupName, fn) {
    try {
        console.info(`${chalk.blue(testGroupName)}\n`);

        beforeAlls.forEach((fn) => fn());
        beforeAlls.length = 0;
        beforeEachs.length = 0;

        fn();

        afterAlls.forEach((fn) => fn());
        afterAlls.length = 0;
        afterEachs.length = 0;
    } catch (err) {
        console.error(`Error: Could not run all tests in ${testGroupName}\n`, err);
    }
};

/*
 * IMPORTANT: You can still return an empty object and the test will
 * still pass or fail.
 */
exports.it = function (testName, fn) {
    try {
        console.info(`${chalk.gray(testName)}`);

        beforeEachs.forEach((fn) => fn());

        const info = fn();
        if (
            typeof info == "object" &&
            info.status !== undefined &&
            info.details !== undefined
        ) {
            if (info.status) total.passedTests++;
            if (!info.status) total.failedTests++;
            total.tests++;
        } else {
            throw Error(`Individual test spec did not contain a test expectation.`);
        }

        afterEachs.forEach((fn) => fn());
    } catch (err) {
        console.error(`Error: Could not run ${testName}.\n`, err);
    }
};

exports.showTestResults = function () {
    console.info(chalk.blue(`\nTotal tests: ${chalk.yellow(total.tests)}`));
    console.info(
        chalk.blue(
            `Tests: ${chalk.green(total.passedTests)} passed, ${chalk.red(
                total.failedTests
            )} failed, ${chalk.yellow(total.tests)} total`
        )
    );

    // All tests have been completed, therefore the program can be closed. (If there is any hold up)
    process.exit();
};
