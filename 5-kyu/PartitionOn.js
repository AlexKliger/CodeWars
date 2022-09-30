/*
Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

For example:

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3
*/

// Parameters: a predicate function that returns either T or F and an (ordered?) array.
// Return: Boundary index (index of first T) but also modifies the passed in array in-place.

function partitionOn(pred, items) {
    const falseArray = []
    const trueArray = []
    items.forEach(item => pred(item) ? trueArray.push(item) : falseArray.push(item))
    items.length = 0
    falseArray.concat(trueArray).forEach(e => items.push(e))
    
    return falseArray.length
}

function isEven(n) {return n % 2 === 0}

items = [1, 2, 3, 4, 5, 6]
console.log('partition index:', partitionOn(isEven, items))
console.log('items:', items)