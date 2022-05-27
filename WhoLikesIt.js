/*
You probably know the "like" system from Facebook and other pages. People can "like" blog
posts, pictures or other items. We want to create the text that should be displayed next to
such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
    let foreTxt = names[0] || "no one"
    let midTxt = ""
    let endTxt = " likes this"

    if(names.length >= 2) {
        midTxt = " and " + names[1]
        endTxt = " like this"
    }
    if(names.length >= 3) {
        foreTxt = names.slice(0, 2).join(', ')
        midTxt = " and " + names[2]
    }
    if(names.length >= 4) {
        midTxt = ` and ${names.slice(2).length} others`
    }

    return foreTxt + midTxt + endTxt
}