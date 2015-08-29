/*
Write a method that takes an array of hashes with two keys each: country or state, and capital. Keys may be symbols or strings

The method should return an array of sentences declaring the state or country and its capital.

Examples

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] # returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0] # returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] # returns "The capital of Spain is Madrid"

*/

function capital(capitals) {
    var result = [];
    for (var i = 0; i < capitals.length; i++) {
        var vals = [];
        for (var key in capitals[i]) {
            vals.push(capitals[i][key]);
        }
        result.push("The capital of " + vals[0] + " is " + vals[1]);
    }
    return result;
}


//Other's solution:
// function capital(capitals){
//   return capitals.map(function(o){
//     return "The capital of " + (o.state || o.country) + " is " + o.capital;
//   });
// }