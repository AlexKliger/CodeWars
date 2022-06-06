function maxSequence(arr) {
    let subarr
    let maxSum = 0

    // Iterate over window sizes up to the length of the array.
    for (let window = 1; window <= arr.length; window++) {
        // For a given window size, slide window along array and sum contents.
        for (let i = 0; i <= arr.length - window; i++) {
            subarr = arr.slice(i, i+window)
            sum = sumElements(subarr)
            maxSum = sum > maxSum ? sum : maxSum
        }
    }

    return maxSum
}

function sumElements(arr) {
    sum = arr.reduce((sum, num) => {
        return sum + num
    }, 0)

    return sum
}