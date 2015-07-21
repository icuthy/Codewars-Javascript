/*
2. write a function called englishToKitten that takes a string. return a new string with every word in the string replaced with "meow". keep all of the punctuation from the original string.

"more food, please." => "meow meow, meow.”

*/

function englishToKitten (str) {
return str.replace(/[a-zA-Z]+/g, 'meow');
}