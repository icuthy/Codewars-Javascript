/*
Description:

I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisable by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)

Test.describe('Fixed Tests', _ => {
  Test.assertEquals(AmIAfraid("Monday", 13), false, 'Should return false');
  Test.assertEquals(AmIAfraid("Sunday", -666), true, 'Should return true');
  Test.assertEquals(AmIAfraid("Tuesday", 2), false, 'Should return false');
  Test.assertEquals(AmIAfraid("Tuesday", 965), true, 'Should return true');
  Test.assertEquals(AmIAfraid("Friday", 2), true, 'Should return true');
});
*/

var AmIAfraid = function(day, num){
 switch(day) {
    case "Monday":
        return num === 12 ? true : false;
        break;
    case "Tuesday":
        return num > 95 ?  true :  false;
        break;
    case "Wednesday":
        return num === 34 ?  true :  false;
        break;
    case "Thursday":
        return num === 0 ?  true :  false;
        break;
    case "Friday":
        return num % 2 === 0 ?  true :  false;
        break;  
    case "Saturday":
        return num === 56 ?  true :  false;
        break;
    case "Sunday":
        return num === 666 || num === -666 ?  true :  false;
        break;
    default:
        return false;
}
}

// Other's solutions I like:

// var AmIAfraid = function(day, num) {
//   var preds = {"Sunday":    d => d == 666 || d == -666,
//                "Monday":    d => d == 12,
//                "Tuesday":   d => d > 95,
//                "Wednesday": d => d == 34,
//                "Thursday":  d => d === 0,
//                "Friday":    d => d % 2 === 0,
//                "Saturday":  d => d == 56};
//   return preds[day](num);
// }



// var AmIAfraid = function(day, num){
//   switch(day){
//     case "Monday":
//       return num == 12;
//     case "Tuesday":
//       return num > 95;
//     case "Wednesday":
//       return num == 34;
//     case "Thursday":
//       return num == 0;
//     case "Friday":
//       return num % 2 == 0;
//     case "Saturday":
//       return num ==56;
//     case "Sunday":
//        return Math.abs(num) == 666;
//   }
//   return false;
// }
