'use strict';

// Constructor for Stack datatype
const Stack = function () {
  // Adds storage for itmes stored on the stack
  // Keeps it hidden via defineProperty
  Object.defineProperty(this, '_store', {
    value: [],
  });
};

// Adds a read only property to tell us if the stack is empty
Object.defineProperty(Stack.prototype, 'isEmpty', {
  get() {
    return this._store.length === 0;
  },
});

// Defines a push method to add items to the top of the stack
// returns the stack to allow method chaining
Stack.prototype.push = function (value) {
  this._store.push(value);
  return this;
};

// Defines a pop method that pops the top items off the top of the stack
// this is not an enumerable property
Stack.prototype.pop = function () {
  return this._store.pop();
};

module.exports = Stack;
