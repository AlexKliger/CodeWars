function moveZeros(arr) {
    out = []
    zeros = []
    arr.forEach(e => {
        if (e !== 0) {
            out.push(e)
        } else {
            zeros.push(0)
        }
    })

    return out.concat(zeros)
}