/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False


*/

function scramble(letters, word) {
    if (letters.length < word.length) { return false }
    const lettersCount = charCount(letters)
    const wordCount = charCount(word)
    for (var i = 0; i < Object.keys(wordCount).length; i++) {
        key = Object.keys(wordCount)[i]
        if (!(wordCount[key] <= lettersCount[key])) { return false }
    }
    return true
}

function charCount(str) {
    const counts = {}
    for (var i = 0; i < str.length; i++) {
        char = str[i]
        counts[char] = (counts[char] || 0) + 1
    }
    return counts
}