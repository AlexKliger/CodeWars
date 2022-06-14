function sumIntervals(overlappingIntervals) {
    return overlappingIntervals.reduce((sum, interval) => {
        let diff = interval[1] - interval[0]
        for (var i = 0; i < overlappingIntervals.indexOf(interval); i++) {
            let prevInterval = overlappingIntervals[i],
                prevLower = prevInterval[0],
                prevUpper = prevInterval[1],
                currLower = interval[0],
                currUpper = interval[1]
            if (prevLower <= currLower <= prevUpper && currUpper >= prevUpper) {
            // If the current interval's upper bound is above the previous interval's
                diff = interval[1] - prevInterval[1]
            } else if (prevLower <= currUpper <= prevUpper && currLower <= prevLower) {
            // If the current interval's lower bound is below the previous interval's
                diff = prevInterval[0] - interval[0]
            } else if (prevLower <= currLower <= prevUpper && prevLower <= currUpper <= prevUpper)  {
                // If the current interval's lower & upper bounds are inside the previous interval
                diff = 0
            }
        }

        sum += diff

        return sum
    }, 0)
}

console.log(sumIntervals([[3, 6], [5, 8], [4, 5]]))