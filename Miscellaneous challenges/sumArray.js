/*
3. write a function called sum that takes an array of numbers and returns the sum of everything in the array.
[1,2,3] => 6

*/


function sum(array) {
  var result = 0;

  if(array.length === 0) {
    return 0;
  }

  for (var i=0; i<array.length;i++) {
    result += +array[i];
  } return result;
}