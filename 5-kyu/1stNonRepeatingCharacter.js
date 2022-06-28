/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {
    const counts = {}
    const nonrepeating = []
    s.split('').forEach((c) => {
        // Increment the count. If no count exists, create a new one. All keys to lowercase.
        counts[c.toLowerCase()] = (counts[c.toLowerCase()] || 0) + 1
        // New character. Push onto array of nonrepeating letters.
        if (counts[c.toLowerCase()] === 1) {
            nonrepeating.push(c)
            // If the character repeats, remove character from array of nonrepeating.
        } else if (counts[c.toLowerCase()] > 1 && (nonrepeating.includes(c.toLowerCase()) || nonrepeating.includes(c.toUpperCase()))) {
            let i = Math.max(nonrepeating.indexOf(c.toLowerCase()), nonrepeating.indexOf(c.toUpperCase()))
            console.log(c, 'repeats at index', i)
            nonrepeating.splice(i, 1)
        }
    })

    return nonrepeating.length ? nonrepeating[0] : ''
}