/* Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers.

sum(1,2,3)   // -> 6
sum(1,"2",3) // -> 4
*/

function sum() {
  var total = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function (arg) {
    if (typeof arg === 'number' && arg % 1 === 0) total += arg;
  });
  return total;
}


