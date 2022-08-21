/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
*/

function formatDuration(seconds) {
    let minutes = Math.floor(seconds/60)
    seconds = seconds % 60

    let hours = Math.floor(minutes/60)
    minutes = minutes % 60

    let days = Math.floor(hours/24)
    hours = hours % 24

    let years = Math.floor(days/365)
    days = days % 365

    let units = [seconds, minutes, hours, days, years]
    units = units.filter((unit) => unit !== 0)
    if (units.length === 1) {
        return `${units[0]} second${units[0] > 1 ? "s" : ""}`
    } else if (units.length === 2) {
        return `${units[1]} minute${units[1] > 1 ? "s" : ""} and ${units[0]} second${units[0] > 1 ? "s" : ""}`
    } else if (units.length === 3) {
        return `${units[2]} hour${units[2] > 1 ? "s" : ""}, ${units[1]} minute${units[1] > 1 ? "s" : ""} and ${units[0]} second${units[0] > 1 ? "s" : ""}`
    } else if (units.length === 4) {
        return `${units[3]} day${units[3] > 1 ? "s" : ""}, ${units[2]} hour${units[2] > 1 ? "s" : ""}, ${units[1]} minute${units[1] > 1 ? "s" : ""} and ${units[0]} second${units[0] > 1 ? "s" : ""}`
    }
}

console.log(formatDuration(62))
console.log(formatDuration(3662))