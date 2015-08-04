/*
Filter the number

Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

Test.describe('Fixed Tests', _ => {
  Test.assertEquals(FilterString("123"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("a1b2c3"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
});
*/


var FilterString = function(value) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    if (/\d/.test(value[i]) === true) 
      result += value[i];
  }  return Number(result);
} 


// Others code I liked:

// var FilterString = function(value) { 
//   var result = ""; 
//   for(var i = 0; i < value.length; i++){ 
//       if(!isNaN(value[i])) result += value[i]; 
//   } 
//     return parseInt(result); 
// }

// var FilterString = function(value) { 
// return +value.split('').filter(n => !isNaN(n)).join(''); }

// const FilterString = value => +value.replace(/\D/g, '’);

// var FilterString = function(value) {
//   return +(value.replace(/[^\d]/g, ''));
// }