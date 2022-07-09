/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
 
function pigIt(str) {
    return str.split(' ').map(word => word.slice(1, word.length) + word.slice(0, 1) + ('?!.'.includes(word.slice(word.length-1, word.length)) ? word.slice(word.length, word.length) : 'ay')).join(' ')
}