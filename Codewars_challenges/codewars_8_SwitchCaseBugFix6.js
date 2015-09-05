// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

// Test.describe('Fixed Tests', _ => {
//   Test.assertEquals(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
//   Test.assertEquals(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
//   Test.assertEquals(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
//   Test.assertEquals(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
//   Test.assertEquals(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
//   Test.assertEquals(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');
// });


function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}