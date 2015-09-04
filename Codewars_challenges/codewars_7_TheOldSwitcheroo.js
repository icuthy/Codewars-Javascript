/*
Write a function vowel2index(str)(JS/CS), Vowel2Index(string s)(C#) that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. 
E.g: 

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

function vowel2index(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      (/[aeiou]/i).test(str[i]) ? arr.push(i+1) : arr.push(str[i]);
    }
    str = arr.join('');
    return str;
}


// nice solution by createvibe:

// function vowel2index(str) {
//     return str.replace(/[aeiou]/ig, function(match, idx) { return idx + 1; });
// }