/*
Character Concatenation

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string){
  var result = "";
  for (var i = 0; i < Math.floor(string.length / 2 ); i++) {
    result += string[i] + string[string.length - 1 - i] + (i + 1);
  }
  return result;
}
