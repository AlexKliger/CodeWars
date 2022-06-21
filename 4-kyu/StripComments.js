function solution(input, markers) {
    const lines = input.split('\n')
    
    const stripped = lines.map(line => {
        for (var i = 0; i < markers.length; i++) {
            marker = markers[i]
            if (line.includes(marker)) {
                return line.slice(0, line.indexOf(marker) - 1)
            }   
        }
        return line
    })

    return stripped.join('\n')
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))