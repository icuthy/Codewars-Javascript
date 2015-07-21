/*
Check your arrows

You have a quiver of arrows, but some have been damaged. You need to verify that you have some good ones left, in order to prepare for battle:
anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
If an arrow in the quiver does not have a damaged status, it means it's new.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Test.assertEquals(anyArrows([]), false, "Should handle empty quiver");
Test.assertEquals(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
Test.assertEquals(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");
*/

function anyArrows(arrows){
  return arrows.some(a => !a.damaged);
}