/*
Description:

Given a non-negative integer, return an array containing a list of independent digits in reverse order.

Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  n = n.toString();
  var arr = [];
  for (var i = 0; i < n.length; i++) {
    arr.unshift(+n[i]);
  }  return arr;
}


// function digitize(n){
//   return (n + '').split('').map(Number).reverse();
// }