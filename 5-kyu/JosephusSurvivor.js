/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
*/

// Parameters: two integers n and k, the number of people in a circle and every kth person to eliminate. n >= k >= 1
// Return: the last surviving integer

function josephusSurvivor(n, k) {
    // init index of variable to eliminate and array
    n = new Array(n).fill(null).map((_, i) => i + 1)
    let i = (k - 1) % n.length
    // iterate through loop while the length of the array is greater than 1
    while (n.length > 1) {
        console.log(n)
        // remove the kth element from the array
        n.splice(i, 1)
        // compute a new value for k to be used in the next iteration for the loop
        i = i + k - 1
        i = i > n.length ? i % n.length : i
    }
    return n[0]
}

console.log(josephusSurvivor(4, 2))