function insert(array, rightIndex, value) {
    for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i]
    }
    array[i + 1] = value
}

function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        insert(array, i - 1, array[i])
    }
}

var array = [3, 5, 7, 11, 13, 2, 9, 6, -1]

insertionSort(array)

console.log(array)