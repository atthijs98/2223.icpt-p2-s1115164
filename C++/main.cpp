#include <iostream>
using namespace std;

const int DAYS_IN_YEAR = 365;
const int HOURS_IN_DAY = 24;
const int MINUTES_IN_HOUR = 60;
const int SECONDS_IN_MINUTE = 60;

int seconds;

int getSeconds() {
    int input;
    cout << "Gimme, gimme, gimme an amount of seconds: ";
    cin >> input;
    return input;
}

void dateTimePluralSingularConversion(string message, int dateTime) {
    string pluralConversion = "s ";
    string singularConversion = " ";
    if (dateTime == 1) {
        cout << dateTime << " " << message << singularConversion << endl;
    } else {
        cout << dateTime << " " << message << pluralConversion << endl;
    }
}

int getYears(int remainingSeconds) {
    const int secondsInYear = 31566926;
    seconds = remainingSeconds % secondsInYear;
    int yearInSeconds = remainingSeconds - seconds;
    return yearInSeconds / secondsInYear;
}

int getMonths(int remainingSeconds) {
    const int secondsInMonth = 2629743;
    seconds = remainingSeconds % secondsInMonth;
    int monthInSeconds = remainingSeconds - seconds;
    return monthInSeconds / secondsInMonth;
}

int getWeeks(int remainingSeconds) {
    const int secondsInWeek = 604800;
    seconds = remainingSeconds % secondsInWeek;
    int weekInSeconds = remainingSeconds - seconds;
    return weekInSeconds / secondsInWeek;
}

int getDays(int remainingSeconds) {
    const int secondsInDay = 86400;
    seconds = remainingSeconds % secondsInDay;
    int dayInSeconds = remainingSeconds - seconds;
    return dayInSeconds / secondsInDay;
}

int getHours(int remainingSeconds) {
    const int secondsInHour = 3600;
    seconds = remainingSeconds % secondsInHour;
    int hourInSeconds = remainingSeconds - seconds;
    return hourInSeconds / secondsInHour;
}

int getMinutes(int remainingSeconds) {
    const int secondsInMinute = 60;
    seconds = remainingSeconds % secondsInMinute;
    int minuteInSeconds = remainingSeconds - seconds;
    return minuteInSeconds / secondsInMinute;
}

int main() {
    seconds = getSeconds();
    int time[7] = {
            getYears(seconds),
            getMonths(seconds),
            getWeeks(seconds),
            getDays(seconds),
            getHours(seconds),
            getMinutes(seconds),
            seconds
    };

    string timeLabels[7] = {"year", "month", "week", "day", "hour", "minute", "second"};

    for (int i = 0; i < 7; i++) {
        if (time[i] > 0) {
            dateTimePluralSingularConversion(timeLabels[i], time[i]);
        }
    }
    return 0;
}
