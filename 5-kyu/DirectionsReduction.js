function dirReduc(arr) {
    let i = 1
    let left
    let right
    while (i < arr.length) {
        console.log(i)
        left = arr[i-1]
        right = arr[i]
        if ((left === 'NORTH' && right ==='SOUTH') || (left === 'SOUTH' &&  right === 'NORTH')) {
            arr.splice(i-1, 2)
            i--
        } else if ((left === 'WEST' && right ==='EAST') || (left === 'EAST' &&  right === 'WEST')) {
            arr.splice(i-1, 2)
            i--
        } else {
            i++
        }
    }

    return arr
}

console.log(dirRed(['WEST', 'SOUTH', 'SOUTH', 'EAST', 'SOUTH', 'NORTH', 'WEST', 'NORTH']))