/*
Given a "square" array of subarrays, find the sum of values from the 
first value of the first array, the second value of the second array, 
the third value of the third array, and so on...

Example 1:

var exampleArray = [[1, 0, 0, 0],
                   [0, 1, 0, 0],
                   [0, 0, 1, 0],
                   [0, 0, 0, 1]]

diagonalSum(exampleArray) // => 4
Example 2:

var exampleArray = [[1, 0, 0, 0, 0],
                   [0, 1, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 1, 0],
                   [0, 0, 0, 0, 1]]

diagonalSum(exampleArray) // => 5
*/

function diagonalSum(matrix) {
var total = 0;
    for (var i = 0; i < matrix.length; i++) {
        total += matrix[i][i]; 
        console.log(total);
  }
    return total;
}