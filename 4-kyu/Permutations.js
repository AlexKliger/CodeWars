function permute(chars, perms) {
    if (chars.length === 1) {
        console.log(`char at terminal node: ${chars[0]}`)
        return chars[0]
    }

    let output
    for (var i = 0; i < chars.length; i++) {
        console.log(chars)
        console.log(`char at a given layer: ${chars[i]}`)
        output = chars[i] + permute(chars.slice(0, i).concat(chars.slice(i+1)))
        console.log(`OUTPUT: ${output}`)
    }
    
    return output
}

permute(['a', 'b', 'c'], [])