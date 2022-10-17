// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


class Stack {

  constructor() {
    this.stack = [];    
  }


  push(element) {
    // console.log('this', this);
    this.stack.push(element);    
  }

  pop() {    
    const lastElement = this.stack.pop();
    // console.log('this.stack', this.stack);
    // console.log('lastElement', lastElement);
    return lastElement;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
};

// class StackTest extends Stack {
//   // constructor() {
//   //   super();
//   //   // this.stack = super.stack;    
//   // }

//   map() {
//     console.log('map test', this);
//   }
// }

// const t = new StackTest();
// t.push(1);
// t.map();

// console.log('t.stack', t.stack);





// console.log(typeof Stack);
// let a = new Stack();
// // console.log('a', a);
// a.push(1);
// a.push(2);
// a.push(5);

// console.log('a1', a);

// const peek = a.peek();

// console.log('peek', peek);

// const pop1 = a.pop();
// console.log('pop1', pop1);

// const pop2 = a.pop();
// console.log('pop2', pop2);

// const pop3 = a.pop();
// console.log('pop3', pop3);

// const pop4 = a.pop();
// console.log('pop4', pop4);
// a.pop();
// a.pop();

// console.log('a2', a);
// console.log('a.stack', a.stack);

// const b = new Stack();
// console.log('b', b);






module.exports = {
  Stack
};
