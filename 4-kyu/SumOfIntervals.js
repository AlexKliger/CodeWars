function sumIntervals(overlappingIntervals) {
    return overlappingIntervals.reduce((sum, interval) => {
        let diff = interval[1] - interval[0]
        for (var i = 0; i < overlappingIntervals.indexOf(interval); i++) {
            let prevInterval = overlappingIntervals[i],
                prevLower = prevInterval[0],
                prevUpper = prevInterval[1],
                currLower = interval[0],
                currUpper = interval[1]
            console.log(`interval: ${interval}`)
            // If the current interval's upper bound is above the previous interval's
            if (prevLower <= currLower && currLower <= prevUpper && currUpper >= prevUpper) {
                console.log(`current interval upper bound above previous interval ${prevInterval}`)
                diff = interval[1] - prevInterval[1] <= diff ? interval[1] - prevInterval[1] : diff
            // If the current interval's lower bound is below the previous interval's
            } else if (prevLower <= currUpper && currUpper <= prevUpper && currLower <= prevLower) {
                console.log(`current interval lower bound below previous intervals ${prevInterval}`)
                diff = interval[1] - prevInterval[1] <= diff ? interval[1] - prevInterval[1] : diff
            // If the current interval's lower & upper bounds are inside the previous interval
            } else if (prevLower <= currLower && prevLower <= currUpper && prevUpper >= currLower && prevUpper >= currUpper)  {
                console.log(`current interval between previous interval ${prevInterval}`)
                diff = 0
            }
        }

        sum += diff
        console.log(`sum: ${sum}`)
        return sum
    }, 0)
}

console.log(sumIntervals([[ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ]]))