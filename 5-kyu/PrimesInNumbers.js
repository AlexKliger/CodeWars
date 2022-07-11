/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n) {
    var divisor = 2
    let factors = {}
    while (divisor < n) {
        // If the divisor is a factor of n, increment the count and divide the dividend.
        if (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1
            n = n/divisor
            divisor = 2
            continue
        }
        // If divisor is not a factor, increment divisior.
        divisor += 1
    }
    // Dividend is prime after factoring out all other primes.
    factors[n] = (factors[n] || 0) + 1

    // Format output
    factors = Object.keys(factors).map(fac => {
        return `(${fac}${factors[fac] > 1 ? ('**' + factors[fac]) : ''})`
    }).join('')

    return factors
}