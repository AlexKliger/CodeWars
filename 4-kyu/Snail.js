/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

function snail(arr) {
    const cols = arr[0].length
    const rows = arr.length
    const sorted = []
    var maxTop = 0
    var maxRight = arr[0].length - 1
    var maxBottom = arr.length - 1
    var maxLeft = 0
    var col = 0
    var row = 0

    for (var i = 0; i < cols*rows; i++) {
        sorted.push(arr[row][col])
        if (col < maxRight && row === maxTop) {
            col++
            if (col === maxRight) {
                maxTop++
            }
        } else if (col === maxRight && row < maxBottom) {
            row++
            if (row === maxBottom) {
                maxRight--
            }
        } else if (col > maxLeft && row === maxBottom) {
            col--
            if (col === maxLeft) {
                maxBottom--
            }
        } else if (col === maxLeft && row > maxTop) {
            row--
            if (row === maxTop) {
                maxLeft++
            }
        }
    }

    return sorted
}