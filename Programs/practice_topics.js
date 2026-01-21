/*  
const username = "himanshu";
const password = "123456";

if (username === "himanshu" && password === "1234568") {
  console.log("User logged in successfully !!!");
} else {
  console.log("Invalid Credentials Please try again !!");
}

const marks = 35;
if (marks >= 33 || marks === "grace") {
  console.log("Pass");
} else {
  console.log("Fail");
}

const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please login again");
}

console.log(0 && 10);
console.log(0 || 10);
console.log("" || "Hello");
console.log("JS" && "React");
console.log(null || undefined || "OK");
console.log(!0);

const isMember = true;
const cartValue = 1400;

if (isMember && cartValue >= 1000) {
  console.log("Discount Applied");
}
let a = null;
let b = "Data";

console.log(a && b);

let x = 5;
console.log((x > 3 && x < 10) || x === 20);

//  if else if else

let num = 7;
if (num % i === 0) {
  console.log("Number is even");
} else {
  console.log("Numer is odd");
}

let num = -5;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Invalid number");
}

let age = 21;

if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age <= 60) {
  console.log("Adult");
} else if (age > 60) {
  console.log("Senior");
} else {
  console.log("Invalid age");
}

let color = "orange";

if (color === "red") {
  console.log("ready");
} else if (color === "orange") {
  console.log("steady");
} else if (color === "green") {
  console.log("go");
} else {
  console.log("Invalid input");
}


let char = "g";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("Vowels");
} else {
  console.log("Consonant");
}


// Switch Statements

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

let a = 10;
let b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(`Addition of a and b is ${a + b}`);
    break;
  case "-":
    console.log(`Substraction a and b  is ${a + b}`);
    break;
  case "*":
    console.log(`Multiplication a and b is ${a + b}`);
    break;
  case "/":
    console.log(`Division a and b is ${a + b}`);
    break;
  default:
    console.log("Incorrect input");
}


let choice = 2;

switch (choice) {
  case 1:
    console.log("Tea");
    break;
  case 2:
    console.log("Coffee");
    break;
  default:
    console.log("Invalid input");
}


let lang = "hi";

switch (lang) {
  case "hi":
    console.log("Hindi");
    break;
  case "en":
    console.log("English");
    break;
  default:
    console.log("Other language");
}


// function declaration vs function expression

// function declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

//Arrow function
const addition = function (a, b) {
  return a + b;
};
console.log(addition(3, 5));

//function expression
const substract = function (a, b) {
  return a - b;
};
console.log(substract(10, 5));

// function expression
const greet = function () {
  console.log("Hello Greet");
};
greet();

*/
// function calling other function
function multiply(a, b) {
  return a * b;
}

function calculate() {
  return multiply(2, 4);
}

console.log(calculate());

function printSquare(num) {
  return num * num;
}

function square() {
  return printSquare(5);
}

console.log(square());

function sayHello() {
  console.log("Hello Greet");
}

function greet() {
  sayHello();
}

greet();

function double(x) {
  return x * 2;
}

function triple(y) {
  return y * 3;
}

function result(num) {
  return double(num) + triple(num);
}

console.log(result(2));
