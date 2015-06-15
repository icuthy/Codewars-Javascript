/*
Find the number of divisors of a positive integer n.
*/

function getDivisorsCnt(n) {
    var total = 0;
//start at 1
    for (var i = 1; i <= n; i++) {
//find divisors
        if (n % i === 0) {
//add 1 for each divisor
        total += 1;
        }                 
    }
    return total;
}