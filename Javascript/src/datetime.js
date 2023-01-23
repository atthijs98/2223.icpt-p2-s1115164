const prompt = require("prompt-sync")();

const DAYS_IN_YEAR = 365;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

let seconds;

function getSeconds() {
    return parseInt(prompt("Gimme, gimme, gimme an amount of seconds: "));
}

function dateTimePluralSingularConversion(message, dateTime) {
    let pluralConversion = "s ";
    let singularConversion = " ";
    if (dateTime === 1) {
        console.log(`${dateTime} ${message}${singularConversion}`);
    } else {
        console.log(`${dateTime} ${message}${pluralConversion}`);
    }
}

function getYears(remainingSeconds) {
    const secondsInYear = 31566926;
    seconds = remainingSeconds % secondsInYear;
    let yearInSeconds = remainingSeconds - seconds;
    return Math.floor(yearInSeconds / secondsInYear);
}

function getMonths(remainingSeconds) {
    const secondsInMonth = 2629743;
    seconds = remainingSeconds % secondsInMonth;
    let monthInSeconds = remainingSeconds - seconds;
    return Math.floor(monthInSeconds / secondsInMonth);
}

function getWeeks(remainingSeconds) {
    const secondsInWeek = 604800;
    seconds = remainingSeconds % secondsInWeek;
    let weekInSeconds = remainingSeconds - seconds;
    return Math.floor(weekInSeconds / secondsInWeek);
}

function getDays(remainingSeconds) {
    const secondsInDay = 86400;
    seconds = remainingSeconds % secondsInDay;
    let dayInSeconds = remainingSeconds - seconds;
    return Math.floor(dayInSeconds / secondsInDay);
}

function getHours(remainingSeconds) {
    const secondsInHour = 3600;
    seconds = remainingSeconds % secondsInHour;
    let hourInSeconds = remainingSeconds - seconds;
    return Math.floor(hourInSeconds / secondsInHour);
}

function getMinutes(remainingSeconds) {
    const secondsInMinute = 60;
    seconds = remainingSeconds % secondsInMinute;
    let minuteInSeconds = remainingSeconds - seconds;
    return Math.floor(minuteInSeconds / secondsInMinute);
}

function main(){
    seconds = getSeconds();
    let time = [
        getYears(seconds),
        getMonths(seconds),
        getWeeks(seconds),
        getDays(seconds),
        getHours(seconds),
        getMinutes(seconds),
        seconds
    ];

    let timeLabels = ["year", "month", "week", "day", "hour", "minute", "second"];

    for (let i = 0; i < time.length; i++) {
        if (time[i] > 0) {
            dateTimePluralSingularConversion(timeLabels[i], time[i]);
        }
    }
}

main();
