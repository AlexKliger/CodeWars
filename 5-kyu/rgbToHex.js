/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

decToHexSymbols = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A', 
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

function decToHex(dec) {
    let remainder = dec % 16
    let quotient = Math.floor(dec / 16)
    let hex = decToHexSymbols[remainder]

    // Repeatedly divide by 16 until the quotient is 0.
    while (quotient > 0) {
        remainder = quotient % 16
        // Append the remainder to the most significant digit.
        hex = decToHexSymbols[remainder] + hex
        quotient = Math.floor(quotient/16)
    }

    return hex.padStart(2, '0')
}

function rgb(r, g, b) {
    r = r > 255 ? 255 : r < 0 ? 0 : r
    g = g > 255 ? 255 : g < 0 ? 0 : g
    b = b > 255 ? 255 : b < 0 ? 0 : b
    return decToHex(r) + decToHex(g) + decToHex(b)
}

console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(173, 255, 47))