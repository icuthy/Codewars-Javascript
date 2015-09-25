// Write a function divisibleBy, which takes two arguments and returns all number, which are divisible by given divisor. First argument is array of numbers and the second is divisor.

// E.g. divisibleBy([1,2,3,4,5,6], 2) sould returns [2,4,6]

function divisibleBy(numbers, divisor){
   var result = [];
  for (var i = 0; i < numbers.length; i++) {
   if ( (numbers[i]/divisor) % 1 === 0 ) {
    result.push(numbers[i]);
    }
   }
   return result;
}
