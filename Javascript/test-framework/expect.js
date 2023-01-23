const chalk = require("chalk");

function succes(to, actual, expected) {
    const succesInfo = {
        status: true,
        details: { actual: actual, expected: expected },
    };
    console.info(
        chalk.white.bgGreen.bold("Test passed:") +
        " " +
        chalk.green(`expect ${actual} ${to} ${expected}\n`),
        succesInfo,
        "\n"
    );

    return succesInfo;
}

function fail(to, actual, expected) {
    const failInfo = {
        status: false,
        details: { actual: actual, expected: expected },
    };
    console.error(
        chalk.white.bgRed.bold("Test failed:") +
        " " +
        chalk.red(`expect ${actual} ${to} ${expected}\n`),
        failInfo,
        "\n"
    );

    return failInfo;
}

exports.expect = function (actual) {
    return {
        toBe: function (expected) {
            if (actual === expected) {
                return succes(this.toBe.name, actual, expected);
            }
            return fail(this.toBe.name, actual, expected);
        },
        toEqual: function (expected) {
            if (actual == expected) {
                return succes(this.toEqual.name, actual, expected);
            }
            return fail(this.toEqual.name, actual, expected);
        },
        toBeUndefined: function () {
            if (actual === undefined) {
                return succes(this.toBeUndefined.name, actual, expected);
            }
            return fail(this.toBeUndefined.name, actual, expected);
        },
        toBeDefined: function () {
            if (actual !== undefined) {
                return succes(this.toBeUndefined.name, actual, expected);
            }
            return fail(this.toBeUndefined.name, actual, expected);
        },
        toBeNull: function () {
            if (actual === null) {
                return succes(this.toBeNull.name, actual, expected);
            }
            return fail(this.toBeNull.name, actual, expected);
        },
        toBeFalsy: function () {
            if (actual == false) {
                return succes(this.toBeFalsy.name, actual, expected);
            }
            return fail(this.toBeFalsy.name, actual, expected);
        },
        toBeTruthy: function () {
            if (actual == true) {
                return succes(this.toBeTruthy.name, actual, expected);
            }
            return fail(this.toBeTruthy.name, actual, expected);
        },
    };
};
