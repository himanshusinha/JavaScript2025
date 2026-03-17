function sayHello() {
  return "Hello World";
}
let greeting = sayHello();
console.log(greeting);

function addition(a, b) {
  return a + b;
}
let result = addition(3, 4);
console.log(result);

function myFunction(x, y = 10) {
  return x * y;
}

let newVal = myFunction(5);
console.log(newVal);

// function declaration
function multiplication(a, b) {
  return a * b;
}

// function expression
let newResult = function (a, b) {
  return a * b;
};

console.log(newResult(5, 4));
