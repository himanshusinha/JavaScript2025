function sayHello() {
  console.log("Hello World");
}
sayHello();

// a, b parameters  2,4 arguements actual value
function multiply(a, b) {
  return a * b;
}
const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(3, 4);
console.log(result2);

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// console.log(carName);

function defaultFunction(a, b = 10) {
  return a + b;
}
const newResultVal = defaultFunction(5);
console.log(newResultVal);

function sayHelloWorld() {
  return "Hello World";
}
let message = sayHelloWorld();
console.log(message);

// function declaration
function division(a, b) {
  return a / b;
}

// function expression
const divide = function (a, b) {
  return a / b;
};

const sum = (a, b) => a + b;
console.log(sum(3, 4));

const x = (y) => {
  return y * y;
};
const z = x(6);
console.log(z);
