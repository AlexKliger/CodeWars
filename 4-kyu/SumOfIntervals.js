function sumIntervals(intervals) {
    let prevInterval,
        currInterval,
        prevLower,
        prevUpper,
        currLower,
        currUpper
    const nonoverlapping = []
    while (intervals.length) {
        prevInterval = intervals.shift()
        for (var i = 0; i < intervals.length; i++) {
            currInterval = intervals[i]
            prevLower = prevInterval[0]
            prevUpper = prevInterval[1]
            currLower = currInterval[0]
            currUpper = currInterval[1]
            if (currLower >= prevLower && currLower <= prevUpper && currUpper >= prevUpper) {
                prevInterval[1] = currUpper
                intervals.splice(i, 1)
                i = -1
            } else if (currUpper >= prevLower && currUpper <= prevUpper && currLower <= prevLower) {
                prevInterval[0] = currLower
                intervals.splice(i, 1)
                i = -1
            } else if (currLower >= prevLower && currLower <= prevUpper && currUpper >= prevLower && currUpper <= prevUpper) {
                intervals.splice(i, 1)
                i--
            }
        }
        nonoverlapping.push(prevInterval)
    }
    return nonoverlapping.reduce((sum, interval) => {
        diff = interval[1] - interval[0]
        sum += diff
        return sum
    }, 0)
}

console.log(sumIntervals([[3, 5], [6, 9], [5, 7], [1, 4], [3, 4], [11, 15]]))