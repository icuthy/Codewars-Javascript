/*
4. write a function called echo that takes a function and another argument, and calls the function twice with the given argument.

echo(alert, "beep");
will call
alert("beep");
twice
*/

function echo (funk, x) {
funk(x);
funk(x);
}

echo(alert,"beep");