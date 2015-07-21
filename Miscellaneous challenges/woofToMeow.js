/*
1. write a function called woofToMeow that takes an array of strings. replace every string "woof" inside the array with "meow".
["woof", "tire", "beep", "woof"] => ["meow", "tire", "beep", "meow”]
*/

function woofToMeow(strArr) {
    var result = [];
    for (var i = 0; i < strArr.length; i++) {
        strArr[i].toLowerCase() === "woof" ? result.push('meow') : result.push(strArr[i]);
    }
    return result;
}

