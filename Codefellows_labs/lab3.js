/*********************************************************
LAB 2: Campy Sci-fi

Welcome to Lab 3 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab3.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: Body Swap. 20 points.
//*********************************************************

// TODO: modify this constructor to create objects
// with several properties, some of which model physical
// attributes, and some of which model mental attributes.
// Examples might include height (physical) and favorite
// book (mental). It should take arguments so that each
// object it creates can be unique.

function Person (bodyType, smellsOf, faveBook, faveFilm) {
  this.bodyType = bodyType;
  this.smellsOf = smellsOf;
  this.faveBook = faveBook;
  this.faveFilm = faveFilm;
  this.canAct = true;
}

var annie = new Person("ectomorph",
  "cabbage",
  "A Fine Balance",
  "Romy and Michele HS Reunion");

var brian = new Person("endomorph",
  "donuts",
  "Javascript & JQuery",
  "The Prime of Miss Jean Brody");

// the parameters a and b are Person objects
// TODO: swap all the mental attributes of person a and person b

function bodySwap(a, b) {
  var temp1 = a.faveBook;
  a.faveBook = b.faveBook;
  b.faveBook = temp1;

  var temp2 = a.faveFilm;
  a.faveFilm = b.faveFilm;
  b.faveFilm = temp2;
}

bodySwap(annie, brian);

assert(annie.faveBook === "Javascript & JQuery", "annie.faveBook === 'Javascript & JQuery'");

// TODO: give kirk some unique attributes
var kirk = new Person("podgy",
  "cheese",
  "Wind in the Willows",
  "Laurel and Hardy do Dallas"
  );
  kirk.canAct = false;

// TODO: give kirk some unique attributes
var drLester = new Person("hot",
  "rainbows",
  "You too can macrame your own bikini",
  "Texas Chainsaw Massacre"
  );

// TODO: write two assertions, one about kirk and one about drLester
// anything that should be true at this point about them

assert(kirk.smellsOf === "cheese", "You so wrong: kirk.smellsOf === 'cheese'");
assert(drLester.smellsOf === "rainbows", "You so wrong: drLester.smellsOf === 'rainbows'");

bodySwap(kirk, drLester);

// TODO: write two more assertions, one about kirk and one about
// drLester. test for things that should have changed during the
// call to bodySwap

assert(kirk.faveBook === "You too can macrame your own bikini", "kirk 'macrame bikini'");
assert(drLester.faveBook === "Wind in the Willows", "drLester 'Wind in the Willows'");
assert(kirk.canAct === false, "no need for error message");

// PROBLEM 2: The Blob. 20 points
//*********************************************************
/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 Use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var hoursSpentInDowington = 0;

for (var peepsEaten = 1; peepsEaten <= 1000; peepsEaten++) {
    hoursSpentInDowington += (1 / peepsEaten);
    }

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze it's way through that town.

function hoursToOoze(population, peoplePerHour) {

  var hours = 0;

  for (var i = peoplePerHour; i < population + peoplePerHour; i++) {
  hours += (1 / i);
  }
  return hours;
}
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(hoursToOoze(1000, 1) === hoursSpentInDowington,
    "hoursSpentInDowington should match hoursToOoze result for 1000");
assert(hoursToOoze(1, 2) === 0.5, "wrong.");
assert(hoursToOoze(2, 2).toFixed(3) === "0.833", "also wrong");
assert(hoursToOoze(3, 1) === 110/60, "no people means no time needed.");


//*********************************************************
// PROBLEM 3: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH", // home planet is Qo"noS
  romulan: "Jolan'tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

// TODO: specify a home planet and a language
// you'll need to add parameters to this constructor

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
// sb is a SentientBeing object
  this.sayHello = function(sb) {
// TODO: say hello prints out (console.log's) hello in the
// language of the speaker, but returns it in the language
// of the listener (the sb parameter above).
// use the 'hello' object at the beginning of this exercise
// to do the translating sb is a SentientBeing object
     console.log(hello["language"]);
      return hello[sb.language];
  };
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {}
function Romulan() {}
function Human() {}

Klingon.prototype = new SentientBeing("Qo'noS", "klingon");
Romulan.prototype = new SentientBeing("Romulus", "romulan"); 
Human.prototype = new SentientBeing("Earth", "federation standard"); 

assert((new Klingon()).sayHello(new Human()) === "hello",
 "the human should hear hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan'tru",
   "the Romulan should hear Jolan'tru");

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
 "the klingon should hear nuqneH");
assert((new Human()).sayHello(new Romulan()) === "Jolan'tru",
 "the Romulan should hear Jolan'tru");

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
 "the klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello",
 "the human should hear hello");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
