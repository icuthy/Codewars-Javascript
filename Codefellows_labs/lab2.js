/*********************************************************
LAB 3:

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: What's in a Name? 20 points.
//
// Each of the following three functions (x, y, and z) has
// an empty body. Look at the asserts for each function to
// figure out what function is supposed to do. Rename each
// function to reflect its purpose, implement them,
// then, add two more passing asserts for each one.
//*********************************************************

function circumference(radius) {
  return 2 * Math.PI * radius;
}

assert(6.28 < circumference(1) && circumference(1) < 6.2832, "circumference(1)");
assert(12.56 < circumference(2) && circumference(2) < 12.5664, "circumference(2)");
assert(18.84 < circumference(3) && circumference(3) < 18.8496, "circumference(3)");
assert(25.13 < circumference(4) && circumference(4) < 25.1328, "circumference(4)");
assert(31.41 < circumference(5) && circumference(5) < 31.4160, "circumference(5)");

function minimum(a, b, c) {

return Math.min(a, b, c);

}

assert(minimum(1, 2, 3) === 1, "minimum(1, 2, 3)");
assert(minimum(4, 5, 3) === 3, "minimum(4, 5, 3)");
assert(minimum(-5, -10, 1) === -10, "minimum(-5, -10, 1)");
assert(minimum(-55, -10, 1) === -55, "minimum(-55, -10, 1)");
assert(minimum(75, 10, 13333333) === 10, "minimum(75, 10, 13333333)");

function cube(num) {
return Math.pow(num, 3);
}

assert(cube(1) === 1, "cube(1)");
assert(cube(3) === 27, "cube(3)");
assert(cube(5) === 125, "cube(5)");
assert(cube(4) === 64, "cube(4)");
assert(cube(6) === 216, "cube(6)");

//*********************************************************
// PROBLEM 2: May cause side effects. 20 points.
//
// Identify all the side effects in the following functions.
// Use a comment (above the line with the side effect) to
// explain why it's a side effect and how it affects the
// outside scope.
//*********************************************************

// Take two arrays. Return true if they have all the same
// items. Ordering doesn't matter. Otherwise, return false.

function sameItems(array1, array2) {
  //SIDE EFFECT:the two sort lines below have side effects as sort changes the
  //array and therefore the values of array1 and array2, which are
  //known outside the function.

  array1.sort();
  array2.sort();

  // SIDE EFFECT:Pop removes last element of an array, and changes length of array,

  while (array1.pop() === array2.pop()) {
    if (!array1.length) {
      return true;
    }
  }
  return false;
}

assert(sameItems([], []), "sameItems([],[])");
assert(sameItems([ 1, 2, 3 ], [ 2, 3, 1 ]), "sameItems([1,2,3],[2,3,1])");
assert(!sameItems([], [ 1 ]), "sameItems([],[1])");

// Take an array of string and a search string. Return an array
// that has only the strings in array that included the search string

function filter(array, searchString) {
  var startLength = array.length,
    currentString;
  for (var i = 0; i < startLength; i++) {

// SIDE EFFECT: The pop() method removes the last element of an array and changes
// the length of the original array, and the array has scope outside this function.

    currentString = array.pop();
    if (currentString.indexOf(searchString) !== -1) {

// SIDE EFFECT: The array variable is affected outside of this code body as
// the unshift() method adds new items to the beginning of an array.
      array.unshift(currentString);
    }
  }
  return array;
}

var catWords = [ "catnip", "kitty yawns", "kitten pile" ];
var kittenWords = [ "kitty yawns", "kitten pile" ];
assert(sameItems(kittenWords, filter(catWords, "kitt")), "filter");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************

function maximum(array) {
//my notes: apply is a convenient way to pass an array of data as parameters to a function.
return Math.max.apply(Math, array);
}

assert(maximum([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(maximum([ 4, 8, 10 ]) === 10, "[4,8,10]");
assert(maximum([ 9, 48, 5 ]) === 48, "[9,48,5]");
assert(maximum([ 134, 3, 24 ]) === 134, "[134,3,24]");

function variablify(string) {
  var result = ""; 
  string.split(" ").forEach(function(val, index) {
    var add = val.toLowerCase();
    result += (index === 0 ? add : add[0].toUpperCase() + add.slice(1));
  });
    return result;
  }

assert(variablify("one two three") === "oneTwoThree", "variablify(\"one two three\")");
assert(variablify("four five six") === "fourFiveSix", "variablify(\"four five six\")");
assert(variablify("seven eight nine") === "sevenEightNine", "variablify(\"seven eight nine\")");
assert(variablify("oh my word") === "ohMyWord", "variablify(\"oh my word\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
