package main

import (
	"fmt"
	"strconv"
)

const DAYS_IN_YEAR = 365
const HOURS_IN_DAY = 24
const MINUTES_IN_HOUR = 60
const SECONDS_IN_MINUTE = 60

var seconds int

func getSeconds() int {
	var input string
	fmt.Print("Gimme, gimme, gimme an amount of seconds: ")
	fmt.Scanln(&input)
	result, _ := strconv.Atoi(input)
	return result
}

func dateTimePluralSingularConversion(message string, dateTime int) {
	var pluralConversion string = "s "
	var singularConversion string = " "
	if dateTime == 1 {
		fmt.Println(strconv.Itoa(dateTime) + " " + message + singularConversion)
	} else {
		fmt.Println(strconv.Itoa(dateTime) + " " + message + pluralConversion)
	}
}

func getYears(remainingSeconds int) int {
	const secondsInYear = 31566926
	seconds = remainingSeconds % secondsInYear
	yearInSeconds := remainingSeconds - seconds
	return yearInSeconds / secondsInYear
}

func getMonths(remainingSeconds int) int {
	const secondsInMonth = 2629743
	seconds = remainingSeconds % secondsInMonth
	monthInSeconds := remainingSeconds - seconds
	return monthInSeconds / secondsInMonth
}

func getWeeks(remainingSeconds int) int {
	const secondsInWeek = 604800
	seconds = remainingSeconds % secondsInWeek
	weekInSeconds := remainingSeconds - seconds
	return weekInSeconds / secondsInWeek
}

func getDays(remainingSeconds int) int {
	const secondsInDay = 86400
	seconds = remainingSeconds % secondsInDay
	dayInSeconds := remainingSeconds - seconds
	return dayInSeconds / secondsInDay
}

func getHours(remainingSeconds int) int {
	const secondsInHour = 3600
	seconds = remainingSeconds % secondsInHour
	hourInSeconds := remainingSeconds - seconds
	return hourInSeconds / secondsInHour
}

func getMinutes(remainingSeconds int) int {
	const secondsInMinute = 60
	seconds = remainingSeconds % secondsInMinute
	minuteInSeconds := remainingSeconds - seconds
	return minuteInSeconds / secondsInMinute
}

func main() {
	seconds = getSeconds()
	time := [7]int{
		getYears(seconds),
		getMonths(seconds),
		getWeeks(seconds),
		getDays(seconds),
		getHours(seconds),
		getMinutes(seconds),
		seconds,
	}

	timeLabels := [7]string{"year", "month", "week", "day", "hour", "minute", "second"}

	for i := 0; i < len(time); i++ {
		if time[i] > 0 {
			dateTimePluralSingularConversion(timeLabels[i], time[i])
		}
	}
}
