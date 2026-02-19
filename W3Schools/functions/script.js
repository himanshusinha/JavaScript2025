// function declaration

function myFunction() {
  console.log("Function called");
}
// running calling invoking
myFunction();

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));

// function expression
const calc = function (a, b) {
  return a + b;
};

const result = calc(2, 4);
console.log(result);

// hoisting
const sum = function (c, d) {
  return c + d;
};
console.log(sum(4, 6));

// callback function
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Himanshu", sayBye);
