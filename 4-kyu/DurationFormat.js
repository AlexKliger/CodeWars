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
    const units = {
        second: seconds,
        minute: 0,
        hour: 0,
        day: 0,
        year: 0
    }
    let minutes = Math.floor(seconds/60)
    units.second = seconds % 60

    let hours = Math.floor(minutes/60)
    units.minute = minutes % 60

    let days = Math.floor(hours/24)
    units.hour = hours % 24

    units.year = Math.floor(days/365)
    units.day = days % 365

    Object.keys(units).forEach((unit) => {
        const unitValue = units[unit]
        if (unitValue === 0) {
            delete units[unit]
        }
    })
    
    var output = ""

    if (Object.keys(units).length >= 0) {
        output = 'now'
    }
    if (Object.keys(units).length >= 1) {
        const unit = Object.keys(units)[0]
        const value = units[unit]
        output = `${value} ${unit}${value > 1 ? "s" : ""}`
    }
    if (Object.keys(units).length >= 2) {
        const unit = Object.keys(units)[1]
        const value = units[unit]
        output = `${value} ${unit}${value > 1 ? "s" : ""} and ` + output
    }
    if (Object.keys(units).length >= 3) {
        const unit = Object.keys(units)[2]
        const value = units[unit]
        output = `${value} ${unit}${value > 1 ? "s" : ""}, ` + output
    }
    if (Object.keys(units).length >= 4) {
        const unit = Object.keys(units)[3]
        const value = units[unit]
        output = `${value} ${unit}${value > 1 ? "s" : ""}, ` + output
    }
    if (Object.keys(units).length >= 5) {
        const unit = Object.keys(units)[4]
        const value = units[unit]
        output = `${value} ${unit}${value > 1 ? "s" : ""}, ` + output
    }

    return output
}

console.log('62s ->', formatDuration(62))
console.log('120 ->', formatDuration(120))
console.log('3662 ->', formatDuration(3662))
console.log('10000000000 ->', formatDuration(10000000000))