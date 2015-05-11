// We have a bunch of kids and in the list/array there is shown how much candy each kid has. (postive integer)

// Because we don't want kids to argue.We want each kid to have the same amount of candies, but we can't take candies from kids.

// Your job is to give all the kids the same amount of candies which the kid with the most candies has and then return how much candies have been given. If there is no kids or 1 return -1.

// candies ([5,8,6,4]) // return 9

// candies ([1,2,4,6]) // return 11

// candies ([]) // return -1

function candies(kids){
  if (kids.length <2) {return -1;}
  var candyDiff = 0;
  var highCandyKid = Math.max.apply( Math, kids );
  for (i = 0; i < kids.length; i++) {
    candyDiff += (highCandyKid - kids[i]);
  } return candyDiff;
}
