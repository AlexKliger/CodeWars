function solution(string) {
    newChars = []
    for(var i = 0; i < string.length; i++) {
        char = string.charAt(i)
        if(isUpperCase(char)) {
            newChars.push(` ${char}`)
        } else {
            newChars.push(char)
        }
    }

    return newChars.join('')
}

function isUpperCase(char) {
    if(char !== char.toLowerCase()) {
        return true
    }
    return false
}