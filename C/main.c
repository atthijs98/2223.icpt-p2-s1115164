#include <stdio.h>

#define DAYS_IN_YEAR 365;
#define HOURS_IN_DAY 24;
#define MINUTES_IN_HOUR 60;
#define SECONDS_IN_MINUTE 60;

unsigned long seconds;

unsigned long getSeconds() {
    unsigned long inputSeconds;
    printf("Vul een aantal seconden in: \n");
    scanf("%ld", &inputSeconds);

    return inputSeconds;
}

void dateTimePluralSingularConversion(char* message, unsigned int dateTime) {
    char pluralConversion[] = "s ";
    char singularConversion[] = " ";
    if (dateTime == 1) {
        printf("%d %s%s", dateTime, message, singularConversion);
        return;
    }
    printf("%d %s%s", dateTime, message, pluralConversion);
}

unsigned int getMinutes(unsigned long remaining_seconds) {
    const unsigned int seconds_in_minute = 60;
    if (seconds % seconds_in_minute != 0) {
       seconds = remaining_seconds % seconds_in_minute;
       unsigned int minutes_in_seconds = remaining_seconds - seconds;
       return minutes_in_seconds / seconds_in_minute;
    } else {
        seconds = 0;
        return seconds / seconds_in_minute;
    }
}

unsigned int getHours(unsigned long remaining_seconds) {
    const unsigned int seconds_in_hour = 3600;
    if (seconds % seconds_in_hour != 0) {
        seconds = remaining_seconds % seconds_in_hour;
        unsigned int hours_in_seconds = remaining_seconds - seconds;
        unsigned int hours = hours_in_seconds / SECONDS_IN_MINUTE;
        return hours / MINUTES_IN_HOUR;
    } else {
        seconds = 0;
        return seconds / seconds_in_hour;
    }
}

unsigned int getDays(unsigned long remaining_seconds) {
    const unsigned int seconds_in_day = 86400;
    if (seconds % seconds_in_day != 0) {
        seconds = remaining_seconds % seconds_in_day;
        unsigned int days_in_seconds = remaining_seconds - seconds;
        unsigned int days = days_in_seconds / SECONDS_IN_MINUTE;
        days = days / MINUTES_IN_HOUR;
        return days / HOURS_IN_DAY;
    } else {
        seconds = 0;
        return seconds / seconds_in_day;
    }
}

unsigned int getMonths(unsigned long remaining_seconds) {
    const unsigned int seconds_in_month = 2629744;
    const unsigned int days_in_month = 30;
    if (seconds % seconds_in_month != 0) {
        seconds = remaining_seconds % seconds_in_month;
        unsigned int months_in_seconds = remaining_seconds - seconds;
        unsigned int months = months_in_seconds / SECONDS_IN_MINUTE;
        months = months / MINUTES_IN_HOUR;
        months = months / HOURS_IN_DAY;
        return months / DAYS_IN_YEAR;

    } else {
        seconds = 0;
        return seconds / seconds_in_month;
    }
}

unsigned int getYears(unsigned long remaining_seconds) {
    const unsigned int seconds_in_year = 31556926;
    if (seconds % seconds_in_year != 0) {
        seconds = remaining_seconds % seconds_in_year;
        unsigned int year_in_seconds = remaining_seconds - seconds;
        unsigned int years = year_in_seconds / SECONDS_IN_MINUTE;
        years = years / MINUTES_IN_HOUR;
        years = years / HOURS_IN_DAY;
        return years / DAYS_IN_YEAR;
    } else {
        seconds = 0;
        return seconds / seconds_in_year;
    }
}

int main() {
    seconds = getSeconds();

    unsigned int time[] = {
            getYears(seconds),
            getMonths(seconds),
            getDays(seconds),
            getHours(seconds),
            getMinutes(seconds),
            seconds
    };

    char *name[] = {"year", "month","day","hour", "minute", "second"};
    for (int i = 0; i < 6; i++) {
        dateTimePluralSingularConversion(name[i], time[i]);
    }

    return 0;
}


