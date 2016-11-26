// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!



function removeEveryOther(arr) {
var nuArr = [];
  for (var i = 0; i < arr.length; i++) {
     if ( i % 2 == 0 ) {
       nuArr.push(arr[i]);
     }
 }
     return nuArr;
}


// Test.describe("Basic tests",_=>{
// Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
// Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
// Test.assertSimilar(removeEveryOther([]), []);
// })

function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}