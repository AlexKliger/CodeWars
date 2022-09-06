// P: three strings, case sensitive
// R: bool

function isOrdered(arr) {
    // loop through each element in the array (except for the last one)
    for (let i = 0; i < arr.length - 1; i++) {
        // check that the element at index i is less than the one at i + 1
        if (arr[i + 1] < arr[i]) {
            return false
        }
    }
    return true
}

function getMatchingIndexes(str, part) {
    // returns a list of indexes of chars in str that appear in part
    let p, start = 0, matchingIndexes = []
    // loop through chars of p1
    for (let i = 0; i < part.length; i++) {
        p = part.charAt(i)
        // if str contains p, cache the index
        for (let j = start; j < str.length; j++) {
            s = str.charAt(j)
            if (p === s) {
                matchingIndexes.push(j)
                start = j
                break
            }
        }
    }
    return matchingIndexes
}

function isMerge(str, p1, p2) {
    // immediately return false if the math on the lengths doesn't check out
    if (str.length !== p1.length + p2.length) return false

    let matchingIndexes = getMatchingIndexes(str, p1)

    // char in p1 was not found in str
    if (matchingIndexes.length !== p1.length) return false
    // index values are not ordered
    if (!isOrdered(matchingIndexes)) return false

    // remove characters that were already accounted for in the first loop
    str = str.split('')
    matchingIndexes.forEach(match => str[match] = null)
    str = str.join('')
    matchingIndexes = getMatchingIndexes(str, p2)
    // length of matchingIndexes !== length of p1, indicates a char in p1 was not found in str
    if (matchingIndexes.length !== p2.length) return false

    // if index values are not ordered, return false
    if (!isOrdered(matchingIndexes)) return false

    return true
}

// console.log(isMerge('xcyc', 'xc', 'yc')) // true
// console.log(isMerge('xcyc', 'yc', 'xc')) // true
console.log(isMerge('xcyc', 'xc', 'cy')) // true
