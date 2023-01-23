const { describe, it } = require("../custom-test-framework/test");
const { expect } = require("../custom-test-framework/expect");
const {
    beforeAll,
    afterAll,
} = require("../custom-test-framework/setup-teardown");

const {
    datetimeFunctions,
    setSeconds,
    getSeconds,
} = require("../src/datetime");

const {
    calculateYears,
    calculateMonths,
    calculateDays,
    calculateHours,
    calculateMinutes,
} = datetimeFunctions;

beforeAll(() => {
    setSeconds(
        1 * (365 * 24 * 60 * 60) + // 1 Year
        1 * (30 * 24 * 60 * 60) + // 1 Month
        1 * (24 * 60 * 60) + // 1 Day
        1 * (60 * 60) + // 1 Hour
        1 * 60 + // 1 Minute
        1 // 1 Second
    );
});

afterAll(() => {
    setSeconds(0);
});

describe("Calculate datetime of 1 year, 1 month, 1 day, 1 hour, 1 minute and 1 second", function () {
    it("Calculate to 1 year", () => {
        // Arrange
        const expectedYear = 1;
        const currentSeconds = getSeconds();

        //Act
        const actualYear = calculateYears(currentSeconds);

        //Assert
        return expect(actualYear).toBe(expectedYear);
    });

    it("Calculate to 1 month", () => {
        // Arrange
        const expectedMonth = 1;
        const currentSeconds = getSeconds();

        //Act
        const actualMonth = calculateMonths(currentSeconds);

        //Assert
        return expect(actualMonth).toBe(expectedMonth);
    });

    it("Calculate to 1 day", () => {
        // Arrange
        const expectedDay = 1;
        const currentSeconds = getSeconds();

        //Act
        const actualDay = calculateDays(currentSeconds);

        //Assert
        return expect(actualDay).toBe(expectedDay);
    });

    it("Calculate to 1 hour", () => {
        // Arrange
        const expectedHour = 1;
        const currentSeconds = getSeconds();

        //Act
        const actualHour = calculateHours(currentSeconds);

        //Assert
        return expect(actualHour).toBe(expectedHour);
    });

    it("Calculate to 1 minute", () => {
        // Arrange
        const expectedMinute = 1;
        const currentSeconds = getSeconds();

        //Act
        const actualMinute = calculateMinutes(currentSeconds);

        //Assert
        return expect(actualMinute).toBe(expectedMinute);
    });

    it("After all the above calculations, check that the variable seconds is 1", () => {
        // Arrange
        const expectedSecond = 1;

        //Act
        const actualSecond = getSeconds();

        //Assert
        return expect(actualSecond).toBe(expectedSecond);
    });
});
