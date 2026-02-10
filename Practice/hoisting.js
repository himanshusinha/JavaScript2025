// Hoisting
// var variables are hoisted and initialized with undefined, which is why accessing them before declaration does not throw an error.
console.log(a);
var a = 10;

//function calling
const result = sum(30, 20);
console.log(result);

// function declaration
function sum(a, b) {
  return a + b;
}
