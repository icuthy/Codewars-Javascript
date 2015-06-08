/* Find the last element of a list.

Example:

last( [1,2,3,4] ) // => 4
last( "xyz" )     // => z
last( 1,2,3,4 )   // => 4

In javascript and CoffeeScript a list will be an array, a string or the 
list of arguments.
*/


function last(list){
  if(typeof list === "string" && arguments.length === 1){
    return list[list.length - 1];
  } else if (Array.isArray(list)){
    return list[list.length - 1];
  } else {
    return arguments[arguments.length - 1];
  }
}

//or

function last(){
  var list = arguments.length === 1 ? arguments[0] : arguments;
  return list.length ? list[list.length - 1] : list;
}
