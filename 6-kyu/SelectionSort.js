array = [3, 7, 2, 6, 1, 7, 5]

function indexOfMin(array, startIndex) {
    var minIndex = startIndex
    var minValue = array[startIndex]

    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i
            minValue = array[i]
        }
    }
    return minIndex
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function selectionSort(array) {
    var minIndex
    for (var i = 0; i < array.length; i++) {
        minIndex = indexOfMin(array, i)
        swap(array, i, minIndex)
    }
}

selectionSort(array)

console.log(array)