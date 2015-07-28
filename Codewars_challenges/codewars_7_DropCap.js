// Description:

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, same like you see in the newspaper.

// But for a change lets do that for each and every word of the given String. Your task is to capitalize very word that has length greater than 2, leaving smaller words as they are.

// dropCap('apple') => "Apple"
// dropCap('apple of banana'); => "Apple of Banana"

function dropCap(n) {
    var words = n.split(' ');
    var nuArr = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var capword = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        word.length <= 2 ? nuArr.push(word) : nuArr.push(capword);
    } 
    var result = nuArr.join(' ');
    return result;
}