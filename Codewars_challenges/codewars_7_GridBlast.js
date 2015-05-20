/*
Ready! Set! Fire... but where should you fire?

The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

var grid = ['top left',    'top middle',    'top right',
            'middle left', 'center',        'middle right',
            'bottom left', 'bottom middle', 'bottom right']
HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

fire(0,0); => 'top left'
fire(1,2); => 'bottom middle'
etc.
Notice the grid is a monodimensional array, good luck!
*/

function fire(x,y) {
 
  if (x === 0) {
     if (y === 0) return grid[0];
     if (y === 1) return grid[3];
     if (y === 2) return grid[6];
  }

  if (x === 1) {
     if (y === 0) return grid[1];
     if (y === 1) return grid[4];
     if (y === 2) return grid[7];
  }

  if (x === 2) {
     if (y === 0) return grid[2];
     if (y === 1) return grid[5];
     if (y === 2) return grid[8];
  }
}
