/*
5. write a function called repeat that takes a function and an array of arguments, and calls the function once per argument.

repeat(func, arguments);
repeat(alert, ["test", "anotherTest"]);
will call
alert("test");
and
alert("anotherTest”);

*/


function repeat( func, arrArgs ) {
  if ( typeof func !== 'function' || !array.length ) {
    return console.log("Please enter correct parameters.");
  }
  for (var i = 0; i <arrArgs.length; i++) {
    func(arrArgs[i]);
  }
}