/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

    eight(dividedBy(three()));
*/

const OPERATORS = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    'x': function (x, y) { return x*y },
    '/': function (x, y) { return Math.floor(x/y) }
}



function zero(op) {
    const int = 0
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function one(op) {
    const int = 1
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function two(op) {
    const int = 2
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function three(op) {
    const int = 3
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function four(op) {
    const int = 4
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function five(op) {
    const int = 5
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}

function six(op) {
    const int = 6
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}
function seven(op) {
    const int = 7
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}
function eight(op) {
    const int = 8
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}
function nine(op) {
    const int = 9
    // Right operand
    if (op === undefined) {
        return int
    // Left operand
    } else {
        return OPERATORS[op[0]](int, parseInt(op[1]))
    }
}


function plus(num) {
    return `+${num}`
}

function minus(num) {
    return `-${num}`
}

function times(num) {
    return `x${num}`
}

function dividedBy(num) {
    return `/${num}`
}
