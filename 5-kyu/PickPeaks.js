/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
*/

// P: array of integers, plateus are possible
// E: object containing a list of index position and a list of peaks corresponding to elements of index array. Boundary elements are not included.

// Naive implementation
function pickPeaksNaive(arr) {
    // Set up empty object
    const output = {pos: [], peaks: []}
    let plateauStart = null
    // Iterate through elements 1 to n - 1, where n is the length of the array.
    for (let i = 1; i < arr.length; i++) {
        // If the element is greater than both of its neighbors.
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            console.log('peak at index:', i)
            output.pos.push(i)
            output.peaks.push(arr[i])
            i++
        // If the start of a plateau occurs, cache the starting index.
        } else if (arr[i] === arr[i+1] && arr[i] !== arr[i-1]) {
            console.log('plateauStart:', i)
            plateauStart = i
        // If a plateau ends
        } else if (plateauStart && arr[i] !== arr[i+1]) {
            console.log('plateauEnd:', i)
            // If the plateau is a peak
            if (arr[plateauStart] > arr[i+1] && arr[plateauStart] > arr[plateauStart-1]) {
                console.log('   plateau is a peak')
                output.pos.push(plateauStart)
                output.peaks.push(arr[plateauStart])
            }
            plateauStart = null
        }
    }
    return output
}

// Binary search to find peak. Does not work with plateaus or multiple peaks. Includes boundary elements.
function pickPeaksBinarySearch(arr) {
    const mid = Math.floor(arr.length/2)
    if (arr.length === 1) {
        return arr[0]
    // if element to the left of arr[n/2] is larger than arr[n/2], look to left half
    } else if (arr[mid] <= arr[mid-1]) {
        return pickPeaksBinarySearch(arr.slice(0, mid))
    // else if element to the right of arr[n/2] is larger than arr[n/2], look to right half
    } else if (arr[mid]) {
        return pickPeaksBinarySearch(arr.slice(mid))
    }
}

// console.log(pickPeaksBinarySearch([1, 2, 3, 2, 1]))
// console.log(pickPeaksBinarySearch([1, 2, 2, 6, 3, 1, 6, 3, 2, 1]))

console.log(pickPeaksNaive([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))