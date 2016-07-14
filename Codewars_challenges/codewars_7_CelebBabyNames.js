// Celebrity Baby Names

// Celebrities love to call their children quirky names. The latest trend for baby names is the 'last letter trend'. The rules of the trend are as follows: the first letter of a child's name should be the same as the last letter of their older sibling. For example:

// Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

// And so on...

// Create a function validName which accepts an array of names. It should return "Congratulations, your baby names are compatible!" if all of the names follow the rule. It should return "Back to the drawing board, your baby names are not compatible." if all of the names do not follow the rule.

// If a couple only has one child return "Congratulations, you can choose any name you like!"

// If the array is empty return "You must test at least one name."

// Notes:

// Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
// Names will not include any other characters apart from letters, hyphens or spaces.

function validName(array){
  if(typeof array != "undefined" && array != null && array.length > 0) {
    if (array.length == 1) { return "Congratulations, you can choose any name you like!";}
    
      for (var i = 0; i < array.length-1; i++) {
        var last = array[i].slice(-1);
        var first = array[(i + 1)].slice(0,1);
        if (last.toLowerCase() != first.toLowerCase()) {
            return "Back to the drawing board, your baby names are not compatible.";
        } 
      }
      return "Congratulations, your baby names are compatible!";
  } else { return "You must test at least one name.";}
} 


Test.assertEquals(validName(["Cruz", "Zuma"]), "Congratulations, your baby names are compatible!" , "Test failed");
Test.assertEquals(validName(["Buddy Bear","Romeo", "Olive"]), "Congratulations, your baby names are compatible!" , "Test failed");
Test.assertEquals(validName(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]), "Congratulations, your baby names are compatible!" , "Test failed");
Test.assertEquals(validName(["Jaden"]),"Congratulations, you can choose any name you like!", "Test failed");
Test.assertEquals(validName(["George", "Charlotte"]),"Back to the drawing board, your baby names are not compatible.", "Test failed");

