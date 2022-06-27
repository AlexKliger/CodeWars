/*
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take
[1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
and then take 3, which leads to [1,2,3,1,2,3].

With list [20,37,20,21] and number 1, the result would be [20,37,21]. 
*/

function deleteNth(arr, n) {
    numCount = {}
    numbers = []
    arr.forEach((num, i) => {
        // Increment the number count at the respective number key.
        // Or simply asign 1 to the key if this is the first time the number is encountered.
        numCount[num.toString()] = numCount[num.toString()] + 1 || 1
        console.log(numCount)
        if(numCount[num.toString()] <= n) {
            // If the count of the respective number is less than or equal to n,
            // cache the number.
            numbers.push(num)
        }
    })

    return numbers
}