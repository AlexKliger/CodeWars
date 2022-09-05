// P: three strings, case sensitive
// R: bool

function isOrdered(arr) {
    // loop through each element in the array (except for the last one)
    for (let i = 0; i < arr.length - 1; i++) {
        // check that the element at index i is less than the one at i + 1
        if (arr.at(i + 1) < arr.at(i)) {
            return false
        }
    }
    return true
}

function isMerge(str, p1, p2) {
    // immediately return false if the math on the lengths doesn't check out
    if (str.length !== p1.length + p2.length) return false

    let matchingIndexes = []
    let p, s
    // loop through chars of p1
    for (let i = 0; i < p1.length; i++) {
        p = p1.charAt(i)
        // loop through chars of str
        for (let j = 0; j < str.length; j++) {
            s = str.charAt(j)
            // if chars from p1 and s match, cache the index of char in str
            if (p === s) {
                matchingIndex.push(j)
            }
        }
    }
    // length of matchingIndexes !== length of p1, indicates a char in p1 was not found in str
    if (matchingIndexes.length !== p1.length) return false
    // if index values are not ordered, return false
    if (!isOrdered(matchingIndexes)) return false

    let matchingIndex = []
    // loop through chars of p1
    for (let i = 0; i < p1.length; i++) {
        p = p1.charAt(i)
        // loop through chars of str
        for (let j = 0; j < str.length; j++) {
            s = str.charAt(j)
            // if chars from p1 and s match, cache the index of char in str
            if (p === s) {
                matchingIndex.push(j)
            }
        }
    }
}

isMerge('xcyc', 'xc', 'yc') // true
isMerge('codewars', 'cdwr', 'oeas') // true
isMerge('codewars', 'code', 'code') // false
isMerge('More progress', 'Moreess', 'pro') // false