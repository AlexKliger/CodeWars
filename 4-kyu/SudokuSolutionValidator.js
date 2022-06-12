function validSolution(board) {
    try {
        // // Check for valid rows
        // board.forEach(row => {
        //     if (!validLine(row)) throw BreakException
        // })

        // // Check for valid columns
        // for (var col = 0; col < board[0].length; col++) {
        //     // Construct an array that represents a given column.
        //     const column = []
        //     board.forEach((row) => {
        //         column.push(row[col])
        //     })
        //     if (!validLine(column)) throw BreakException
        // }

        // Check for valid blocks
        let block = []
        let rowStart = 0
        while (board[board.length - 1].length) {
            for (var row = rowStart; row < 3; row++) {
                board[row].splice(0, 3)
                rowStart++
            }
            console.log(board[board.length - 1])
        }

    } catch (err) {
        return false
    }

    return true
}

function validLine(row) {
    for (var i = 1; i <= 9; i++) {
        if (!row.includes(i)) return false
    }
    return true
}

board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

console.log(validSolution(board))