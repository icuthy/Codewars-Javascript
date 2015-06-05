/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 Save this file wherever you like. To run it, navigate (in the terminal) to
 wherever you saved it, and type:

    node lab1.js
*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values. Here are some examples for how to use the assert method:
*/

assert(1 === 1, "failure message here"); 
assert(1 === 2, "this is an assertion failure example. 1===2");

/*
 TODO: 8 points
 Invoke assert twice. Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

assert("tarantulas" !== "gibbons", "tarantulas returning unexpected value");
assert ("ant" > "elephant", "strings are compared lexicographically");

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = "More food please.", 
sentence2 = "Come over here so you can scratch my belly.";

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with "chirp" The
 assertions at the end of this section should pass when you're done.  Use
 **two** different kinds of loops to implement this.
 HINT: the "split" method on String will be useful.
*/

var chop1 = sentence1.split(" ");
var chop2 = sentence2.split(" ");

for (i = 0; i < chop1.length; i++) {
    chop1[i] = "chirp";
}

var together = chop1.join(" ");
sentence1 = together + ".";
var i = 0;

while (i < chop2.length) {
    chop2[i] = "chirp";
    i++; 
} 

var together = chop2.toString();
var noComma = together.replace(/,/g, " ");
sentence2 = noComma + ".";

assert(sentence1 === "chirp chirp chirp.", "sentence 1 should have 3 chirps");
assert(sentence2 === "chirp chirp chirp chirp chirp chirp chirp chirp chirp.",
  "sentence 2 should have 9 chirps");

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
nextAnimal;

nextAnimal = favoriteAnimals[Math.floor(Math.random() * 4)];

assert(nextAnimal, "assign something to nextAnimal");

/* ----------------- Survey Says...----------------------------------------
 Like any conscientious business, the Woodland Park Zoo collects statistics
 about its animal exhibits. The animalExhibitsStats object is a summary of what
 they found.
TODO: 4 points
All of the property names below are surrounded by quotes. Some of the names
don't require quotes for the code to work. Remove the unnecessary quotes.
*/

var animalExhibitStats = {
  numberOpen: 13,
  "number closed": 2,
  "petting-zoo-open": true,
  mostPopular: "Lucky the Emperor Penguin",
  "2ndMostPopular": "Dumbo the Depressed Donkey"
};

/*
 TODO: 4 points
 The animalExhibitStats object is indexed four times below using bracket
 notation. WITHOUT changing any of the property names, replace the bracket
 notation with Dot notation wherever possible.
*/

assert(animalExhibitStats.numberOpen === 13, "there should be 13 open exhibits");
assert(animalExhibitStats["number closed"] === 2, "there should be 2 closed exhibits");
assert(animalExhibitStats["petting-zoo-open"], "hey! =( i was promised meerkats!");
assert(animalExhibitStats["2ndMostPopular"] === "Dumbo the Depressed Donkey",
  "Dumbo is supposed to be second place, as usual");
assert(animalExhibitStats.mostPopular === "Lucky the Emperor Penguin",
"Lucky the penguin should be most popular");

/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 run the tools with:
  ./node_modules/.bin/grunt jshint
  ./node_modules/.bin/grunt jscs

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
