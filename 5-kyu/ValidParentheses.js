/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/

function validParentheses(parens) {
    var openingParen = 0
    var closingParen = 0
    for (var i = 0; i < parens.length; i++) {
        char = parens.charAt(i)
        if (char === '(') {
            openingParen++
        } else if (char === ')') {
            if (openingParen <= closingParen) {
                return false
            }
            closingParen++
        }
    }

    return openingParen === closingParen
}


