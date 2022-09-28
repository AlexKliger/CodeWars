/*
Do you know how to make a spiral? Let's test it!

Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3    
8    9    4    
7    6    5    

*/

// Parameters: An integer, N, that is the side length of a NxN 2D array.
// Return: An NxN 2D array that is a spiral of the 1D array of length N^2.

function printGrid(grid) {
    console.log('grid:')
    grid.forEach(row => console.log(row))
}

function createSpiral(N) {
    // Create NxN grid full of nulls.
    const array = Array(N**2).fill(null).map((_, i) => i + 1)
    const grid = createGrid(N)
    let rightBound = N - 1
    let lowerBound = N - 1
    let leftBound = 0
    let upperBound = 0
    while (array.length > 0) {
        console.log('array:', array)
        // Top row
        let insert = array.splice(0, rightBound + 1 - leftBound)
        grid[upperBound].splice(leftBound, rightBound + 1 - leftBound, ...insert)
        upperBound++
        // Right column
        for (let i = upperBound; i <= lowerBound; i++) {
            grid[i].splice(rightBound, 1, ...array.splice(0, 1))
        }
        rightBound--
        // Bottom row
        insert = array.splice(0, rightBound + 1 - leftBound).reverse()
        grid[lowerBound].splice(leftBound, rightBound + 1 - leftBound, ...insert)
        lowerBound--
        // Left column
        for (let i = lowerBound; i >= upperBound; i--) {
            grid[i].splice(leftBound, 1, ...array.splice(0, 1))
        }
        leftBound++
    }

    return grid
}

function createGrid(N) {
    const grid = []
    for (let i = 0; i < N; i++) {
        const row = new Array(N).fill(null)
        grid.push(row)
    }

    return grid
}

createSpiral(4)