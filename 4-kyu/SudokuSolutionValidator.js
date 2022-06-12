function validSolution(board) {
    try {
        // Check for valid rows
        board.forEach(row => {
            if (!validLine(row)) throw BreakException
        })

        // Check for valid columns
        for (var col = 0; col < board[0].length; col++) {
            // Construct an array that represents a given column.
            const column = []
            board.forEach((row) => {
                column.push(row[col])
            })
            if (!validLine(column)) throw BreakException
        }

        // Check for valid blocks
        let block = []
        while (board[board.length - 1].length) {
            for (var row = 0; row < board.length; row++) {
                block = block.concat(board[row].splice(0, 3))
                if (row % 3 === 2) {
                    if (!validLine(block)) throw BreakException
                    block = []
                }
            }
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