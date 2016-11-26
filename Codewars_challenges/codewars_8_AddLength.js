// Description:

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str){
 var words = str.split(' ');
 var arr = [];
   for (var i = 0; i < words.length; i++) {
     arr.push(words[i] + " " + words[i].length);
   } return arr;
}

// Or using map:

// function addLength(str){
//   return str.split(' ').map(function(v){return v+' '+v.length})
// }

// Or using map and 'fat arrow' arrow function
 
// function addLength(str) {
//   return str.split(' ').map(v => v + ' ' + v.length);
// }

// Without push

// function addLength(str){
// var arr = str.split(' ');
// for(var x = 0; x < arr.length; x++){
//   arr[x] = arr[x] + ' ' + arr[x].length;
//   }
//   return arr;
// }